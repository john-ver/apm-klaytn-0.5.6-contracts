/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP13InterfacesSupported,
  KIP13InterfacesSupportedInterface,
} from "../KIP13InterfacesSupported";

const _abi = [
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
    inputs: [],
    name: "INTERFACE_ID_KIP13",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "interfaceIds",
        type: "bytes4[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102b53803806102b58339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8201602081018481111561005e57600080fd5b815185602082028301116401000000008211171561007b57600080fd5b50509291905050506100996301ffc9a760e01b6100d660201b60201c565b60005b81518110156100cf576100c78282815181106100b457fe5b60200260200101516100d660201b60201c565b60010161009c565b505061018e565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415610151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610287602e913960400191505060405180910390fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b60eb8061019c6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b600160e01b6301ffc9a7028156fea165627a7a72305820e533f6f332a055b9ddbc884cfdb3408e3b95bf5a614e3d21026ae76ca4d0b36600294b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";

type KIP13InterfacesSupportedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP13InterfacesSupportedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP13InterfacesSupported__factory extends ContractFactory {
  constructor(...args: KIP13InterfacesSupportedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    interfaceIds: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP13InterfacesSupported> {
    return super.deploy(
      interfaceIds,
      overrides || {}
    ) as Promise<KIP13InterfacesSupported>;
  }
  getDeployTransaction(
    interfaceIds: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interfaceIds, overrides || {});
  }
  attach(address: string): KIP13InterfacesSupported {
    return super.attach(address) as KIP13InterfacesSupported;
  }
  connect(signer: Signer): KIP13InterfacesSupported__factory {
    return super.connect(signer) as KIP13InterfacesSupported__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP13InterfacesSupportedInterface {
    return new utils.Interface(_abi) as KIP13InterfacesSupportedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP13InterfacesSupported {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KIP13InterfacesSupported;
  }
}
