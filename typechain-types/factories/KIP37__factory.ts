/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37, KIP37Interface } from "../KIP37";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "amounts",
        type: "uint256[]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "accounts",
        type: "address[]",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "uri",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200292938038062002929833981018060405260208110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b5050929190505050620000a56301ffc9a760e01b620000ed60201b60201c565b620000b681620001f660201b60201c565b620000ce636433ca1f60e01b620000ed60201b60201c565b620000e6630e89341c60e01b620000ed60201b60201c565b50620002c1565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200018a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b80600490805190602001906200020e92919062000212565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025557805160ff191683800117855562000286565b8280016001018555821562000286579182015b828111156200028557825182559160200191906001019062000268565b5b50905062000295919062000299565b5090565b620002be91905b80821115620002ba576000816000905550600101620002a0565b5090565b90565b61265880620002d16000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80634e1273f4116100665780634e1273f414610428578063a22cb465146105c9578063bd85b03914610619578063e985e9c51461065b578063f242432a146106d757610092565b8062fdd58e1461009757806301ffc9a7146100f95780630e89341c1461015e5780632eb2c2d614610205575b600080fd5b6100e3600480360360408110156100ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107e6565b6040518082815260200191505060405180910390f35b6101446004803603602081101561010f57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108c6565b604051808215151515815260200191505060405180910390f35b61018a6004803603602081101561017457600080fd5b810190808035906020019092919050505061092d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ca5780820151818401526020810190506101af565b50505050905090810190601f1680156101f75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610426600480360360a081101561021b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561027857600080fd5b82018360208201111561028a57600080fd5b803590602001918460208302840111640100000000831117156102ac57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561030c57600080fd5b82018360208201111561031e57600080fd5b8035906020019184602083028401116401000000008311171561034057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103a057600080fd5b8201836020820111156103b257600080fd5b803590602001918460018302840111640100000000831117156103d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506109d1565b005b6105726004803603604081101561043e57600080fd5b810190808035906020019064010000000081111561045b57600080fd5b82018360208201111561046d57600080fd5b8035906020019184602083028401116401000000008311171561048f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156104ef57600080fd5b82018360208201111561050157600080fd5b8035906020019184602083028401116401000000008311171561052357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610eb4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105b557808201518184015260208101905061059a565b505050509050019250505060405180910390f35b610617600480360360408110156105df57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611092565b005b6106456004803603602081101561062f57600080fd5b810190808035906020019092919050505061122d565b6040518082815260200191505060405180910390f35b6106bd6004803603604081101561067157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061124a565b604051808215151515815260200191505060405180910390f35b6107e4600480360360a08110156106ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561075e57600080fd5b82018360208201111561077057600080fd5b8035906020019184600183028401116401000000008311171561079257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112de565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806124806029913960400191505060405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109c55780601f1061099a576101008083540402835291602001916109c5565b820191906000526020600020905b8154815290600101906020018083116109a857829003601f168201915b50505050509050919050565b8151835114610a2b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806124a96026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ab1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806125a56023913960400191505060405180910390fd5b610ab96116a8565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610aff5750610afe85610af96116a8565b61124a565b5b610b54576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806124cf6030913960400191505060405180910390fd5b6000610b5e6116a8565b9050610b6e8187878787876116b0565b60008090505b8451811015610d42576000858281518110610b8b57fe5b602002602001015190506000858381518110610ba357fe5b60200260200101519050610c2a816040518060600160405280602881526020016124ff602891396001600086815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b89092919063ffffffff16565b6001600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ce1816001600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461177890919063ffffffff16565b6001600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050806001019050610b74565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610df2578082015181840152602081019050610dd7565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610e34578082015181840152602081019050610e19565b5050505090500194505050505060405180910390a4610e57818787878787611800565b610eac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806125c86036913960400191505060405180910390fd5b505050505050565b60608151835114610f10576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806124596027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015610f425781602001602082028038833980820191505090505b50905060008090505b845181101561108757600073ffffffffffffffffffffffffffffffffffffffff16858281518110610f7857fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610fed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806125fe602f913960400191505060405180910390fd5b60016000858381518110610ffd57fe5b60200260200101518152602001908152602001600020600086838151811061102157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811061107057fe5b602002602001018181525050806001019050610f4b565b508091505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166110b16116a8565b73ffffffffffffffffffffffffffffffffffffffff16141561111e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806125276027913960400191505060405180910390fd5b806002600061112b6116a8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111d86116a8565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600060036000838152602001908152602001600020549050919050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611364576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806125a56023913960400191505060405180910390fd5b61136c6116a8565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806113b257506113b1856113ac6116a8565b61124a565b5b611407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061257e6027913960400191505060405180910390fd5b60006114116116a8565b905061143181878761142288611e78565b61142b88611e78565b876116b0565b6114ae836040518060600160405280602881526020016124ff602891396001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b89092919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611565836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461177890919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a461164b818787878787611ed1565b6116a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061254e6030913960400191505060405180910390fd5b505050505050565b600033905090565b505050505050565b6000838311158290611765576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561172a57808201518184015260208101905061170f565b50505050905090810190601f1680156117575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000808284019050838110156117f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008060606118248773ffffffffffffffffffffffffffffffffffffffff16612445565b61183357600192505050611e6e565b8673ffffffffffffffffffffffffffffffffffffffff1663bc197c8160e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156119095780820151818401526020810190506118ee565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561194b578082015181840152602081019050611930565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561198a57808201518184015260208101905061196f565b50505050905090810190601f1680156119b75780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310611a525780518252602082019150602081019050602083039250611a2f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611ab4576040519150601f19603f3d011682016040523d82523d6000602084013e611ab9565b606091505b5080925081935050506000815114158015611b3d575063bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190516020811015611b0b57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611b4d57600192505050611e6e565b8673ffffffffffffffffffffffffffffffffffffffff16639b49e33260e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015611c23578082015181840152602081019050611c08565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611c65578082015181840152602081019050611c4a565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611ca4578082015181840152602081019050611c89565b50505050905090810190601f168015611cd15780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310611d6c5780518252602082019150602081019050602083039250611d49565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611dce576040519150601f19603f3d011682016040523d82523d6000602084013e611dd3565b606091505b5080925081935050506000815114158015611e575750639b49e33260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190516020811015611e2557600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611e6757600192505050611e6e565b6000925050505b9695505050505050565b6060806001604051908082528060200260200182016040528015611eab5781602001602082028038833980820191505090505b5090508281600081518110611ebc57fe5b60200260200101818152505080915050919050565b6000806060611ef58773ffffffffffffffffffffffffffffffffffffffff16612445565b611f045760019250505061243b565b8673ffffffffffffffffffffffffffffffffffffffff1663f23a6e6160e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611fdb578082015181840152602081019050611fc0565b50505050905090810190601f1680156120085780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106120a1578051825260208201915060208101905060208303925061207e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612103576040519150601f19603f3d011682016040523d82523d6000602084013e612108565b606091505b508092508193505050600081511415801561218c575063f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561215a57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561219c5760019250505061243b565b8673ffffffffffffffffffffffffffffffffffffffff1663e78b332560e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612273578082015181840152602081019050612258565b50505050905090810190601f1680156122a05780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106123395780518252602082019150602081019050602083039250612316565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461239b576040519150601f19603f3d011682016040523d82523d6000602084013e6123a0565b606091505b5080925081935050506000815114158015612424575063e78b332560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905160208110156123f257600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156124345760019250505061243b565b6000925050505b9695505050505050565b600080823b90506000811191505091905056fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a165627a7a723058209c787b218452a6b24218a028bcb8432d886c8b95b5dd94a002ce848e45c895ab0029";

type KIP37ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP37ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP37__factory extends ContractFactory {
  constructor(...args: KIP37ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP37> {
    return super.deploy(uri, overrides || {}) as Promise<KIP37>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): KIP37 {
    return super.attach(address) as KIP37;
  }
  connect(signer: Signer): KIP37__factory {
    return super.connect(signer) as KIP37__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP37Interface {
    return new utils.Interface(_abi) as KIP37Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KIP37 {
    return new Contract(address, _abi, signerOrProvider) as KIP37;
  }
}
