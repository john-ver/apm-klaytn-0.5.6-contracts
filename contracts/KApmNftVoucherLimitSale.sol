pragma solidity ^0.5.6;

//import "hardhat/console.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
import "./interfaces/IKApmNftVoucherLimitSale.sol";
import "./utils/ManagerRole.sol";

contract INftVoucher is IKApmNftVoucher{
    function mint(
        uint256 _id,
        address _to,
        uint256 _value
    ) public;
}

contract KApmNftVoucherSale is Ownable, ManagerRole, IKApmNftVoucherLimitSale {
    using SafeMath for uint256;
    IKApmCoin public apmCoin;
    INftVoucher public nftVoucher;
    address public feeTo;
    uint256 public tokenId;
    uint256 public apmPerNft = 1 * 1e18;
    uint256 public step = 0;
    uint256 public saleLimit = 0;
    uint256 public saleCount = 0;
    string public saleName;
    string public saleDescription;
    bool public usingWhitelist = false;
    mapping(address => bool) private _whitelist;
    mapping(address => uint256) private _buyLimitPerAddress;

    constructor(
        IKApmCoin _apmCoin,
        INftVoucher _nftVoucher,
        address _feeToAddress,
        uint256 _tokenId,
        uint256 _saleLimit,
        string memory _saleName,
        string memory _saleDescription
        )
        public
    {
        setApmCoin(_apmCoin);
        setNftVoucher(_nftVoucher);
        setFeeTo(_feeToAddress);
        setTokenId(_tokenId);
        setSaleLimit(_saleLimit);
        setSaleName(_saleName);
        setSaleDescription(_saleDescription);
    }

    function setApmCoin(IKApmCoin _apmCoin) public onlyOwner {
        apmCoin = _apmCoin;
        emit SetApmCoin(address(apmCoin));
    }

    function setNftVoucher(INftVoucher _nftVoucher) public onlyOwner {
        nftVoucher = _nftVoucher;
        emit SetNftVoucher(address(nftVoucher));
    }

    function setFeeTo(address _feeTo) public onlyOwner {
        feeTo = _feeTo;
        emit SetFeeTo(feeTo);
    }

    function setTokenId(uint256 _tokenId) public onlyOwner {
        tokenId = _tokenId;
        emit SetTokenId(tokenId);
    }

    function setApmPerNft(uint256 _apmPerNft) public onlyOwner {
        apmPerNft = _apmPerNft;
        emit SetApmPerNft(apmPerNft);
    }

    function setStep(uint256 _step) public onlyOwner {
        step = _step;
        emit SetStep(step);
    }

    function setSaleLimit(uint256 _saleLimit) public onlyOwner {
        require(_saleLimit > saleCount, "saleLimit must be greater than saleCount.");
        saleLimit = _saleLimit;
        emit SetSaleLimit(saleLimit);
    }

    function setSaleName(string memory _saleName) public onlyManager {
        saleName = _saleName;
        emit SetSaleName(saleName);
    }

    function setSaleDescription(string memory _saleDescription) public onlyManager {
        saleDescription = _saleDescription;
        emit SetSaleDescription(saleDescription);
    }

    function setUsingWhitelist(bool _usingWhitelist) public onlyManager{
        usingWhitelist = _usingWhitelist;
        emit SetUsingWhitelist(usingWhitelist);
    }

    function buyLimitPerAddress(address wallet) public view returns (uint256){
        return _buyLimitPerAddress[wallet];
    }

    function setBuyLimitPerAddress(address[] calldata wallets, uint256[] calldata buyLimits) external onlyManager {
        for (uint256 i = 0; i < wallets.length; i = i.add(1)) {
            _buyLimitPerAddress[wallets[i]] = buyLimits[i];
        }
    }

    function isWhitelist(address wallet) public view returns (bool){
        if(usingWhitelist){
            return _whitelist[wallet];
        }
        return true;
    }

    function addWhitelist(address[] calldata wallets) external onlyManager {
        for (uint256 i = 0; i < wallets.length; i = i.add(1)) {
            _whitelist[wallets[i]] = true;
        }
    }

    function removeWhitelist(address[] calldata wallets) external onlyManager {
        for (uint256 i = 0; i < wallets.length; i = i.add(1)) {
            _whitelist[wallets[i]] = false;
        }
    }

    function buy(uint256 _buyCount, uint256 _apmAmount) public {
        require(_buyCount <= _buyLimitPerAddress[msg.sender], "Buy limit exceeded");
        require(_buyCount > 0, "Need _buyCount");
        require(_apmAmount > 0, "Need _apmAmount");
        require(step == 1, "It's not on sale.");
        require(isWhitelist(msg.sender), "It's not on the whitelist.");

        uint256 calSaleCount = saleCount.add(_buyCount);
        require(calSaleCount <= saleLimit, "Sales NFT is insufficient.");
        uint256 calBuyApmAmount = _buyCount.mul(apmPerNft);
        require(_apmAmount == calBuyApmAmount, "Either apmPerNft has changed or the input price is invalid.");
        uint256 allowanceAmount = apmCoin.allowance(msg.sender, address(this));
        require(_apmAmount <= allowanceAmount, "Need token approve");
        apmCoin.transferFrom(msg.sender, feeTo, _apmAmount);

        saleCount = calSaleCount;
        nftVoucher.mint(tokenId, msg.sender, _buyCount);
        _buyLimitPerAddress[msg.sender] = _buyLimitPerAddress[msg.sender].sub(_buyCount);

        if(saleCount == saleLimit){
            setStep(2);
        }
    }

    function buyAndRedeem(uint256 _buyCount, uint256 _apmAmount, string memory _userUuid) public {
        buy(_buyCount, _apmAmount);
        nftVoucher.redeemVoucher(tokenId, _buyCount, _userUuid);
    }
}