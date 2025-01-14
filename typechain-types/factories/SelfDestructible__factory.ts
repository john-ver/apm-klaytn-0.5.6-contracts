/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SelfDestructible,
  SelfDestructibleInterface,
} from "../SelfDestructible";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "destroy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040819052600080546001600160a01b03191633178082556001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610366806100576000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c57806383197ef0146100665780638da5cb5b1461006e5780638f32d59b14610092578063f2fde38b146100ae575b600080fd5b6100646100d4565b005b61006461017a565b6100766101e9565b604080516001600160a01b039092168252519081900360200190f35b61009a6101f8565b604080519115158252519081900360200190f35b610064600480360360208110156100c457600080fd5b50356001600160a01b0316610209565b6100dc6101f8565b6101305760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6101826101f8565b6101d65760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6101de6101e9565b6001600160a01b0316ff5b6000546001600160a01b031690565b6000546001600160a01b0316331490565b6102116101f8565b6102655760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61026e81610271565b50565b6001600160a01b0381166102b957604051600160e51b62461bcd0281526004018080602001828103825260268152602001806103156026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a72305820441f7ef5bf18a5ab71f75664855410d3f57ca07849c534ce03cdb504439ddd720029";

type SelfDestructibleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SelfDestructibleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SelfDestructible__factory extends ContractFactory {
  constructor(...args: SelfDestructibleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SelfDestructible> {
    return super.deploy(overrides || {}) as Promise<SelfDestructible>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SelfDestructible {
    return super.attach(address) as SelfDestructible;
  }
  connect(signer: Signer): SelfDestructible__factory {
    return super.connect(signer) as SelfDestructible__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SelfDestructibleInterface {
    return new utils.Interface(_abi) as SelfDestructibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SelfDestructible {
    return new Contract(address, _abi, signerOrProvider) as SelfDestructible;
  }
}
