/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKApmNftVoucher,
  IKApmNftVoucherInterface,
} from "../IKApmNftVoucher";

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
    constant: false,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_uuid",
        type: "string",
      },
    ],
    name: "redeemVoucher",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isBlacklist",
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
    constant: true,
    inputs: [
      {
        name: "uuid",
        type: "string",
      },
    ],
    name: "isUuidBlacklist",
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
        name: "id",
        type: "uint256",
      },
      {
        name: "_faceValue",
        type: "uint256",
      },
      {
        name: "_currencyCode",
        type: "string",
      },
      {
        name: "_expireAt",
        type: "uint256",
      },
      {
        name: "_redeemAvailable",
        type: "bool",
      },
    ],
    name: "setVoucherDetail",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "SetBlacklistManager",
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
    ],
    name: "RegisterBlacklist",
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
    ],
    name: "UnregisterBlacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "uuid",
        type: "string",
      },
    ],
    name: "RegisterUuidBlacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "uuid",
        type: "string",
      },
    ],
    name: "UnregisterUuidBlacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "voucherType",
        type: "string",
      },
      {
        indexed: false,
        name: "faceValue",
        type: "uint256",
      },
      {
        indexed: false,
        name: "currencyCode",
        type: "string",
      },
      {
        indexed: false,
        name: "expireAt",
        type: "uint256",
      },
      {
        indexed: false,
        name: "redeemAvailable",
        type: "bool",
      },
    ],
    name: "SetVoucherDetail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        name: "_uuid",
        type: "string",
      },
      {
        indexed: false,
        name: "voucherType",
        type: "string",
      },
      {
        indexed: false,
        name: "faceValue",
        type: "uint256",
      },
      {
        indexed: false,
        name: "currencyCode",
        type: "string",
      },
      {
        indexed: false,
        name: "expireAt",
        type: "uint256",
      },
      {
        indexed: true,
        name: "sender",
        type: "address",
      },
    ],
    name: "RedeemVoucher",
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

export class IKApmNftVoucher__factory {
  static readonly abi = _abi;
  static createInterface(): IKApmNftVoucherInterface {
    return new utils.Interface(_abi) as IKApmNftVoucherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKApmNftVoucher {
    return new Contract(address, _abi, signerOrProvider) as IKApmNftVoucher;
  }
}
