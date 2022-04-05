/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface KApmNftVoucherSaleInterface extends utils.Interface {
  functions: {
    "feeTo()": FunctionFragment;
    "getSaleName()": FunctionFragment;
    "removeWhitelist(address[])": FunctionFragment;
    "getSaleLimit()": FunctionFragment;
    "setSaleTokenId(uint256)": FunctionFragment;
    "setApmCoin(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "getSaleTokenId()": FunctionFragment;
    "getApmCoin()": FunctionFragment;
    "getStep()": FunctionFragment;
    "getNftVoucher()": FunctionFragment;
    "setSaleName(string)": FunctionFragment;
    "getApmPerNft()": FunctionFragment;
    "setNftVoucher(address)": FunctionFragment;
    "getSaleCount()": FunctionFragment;
    "setSaleCount(uint256)": FunctionFragment;
    "isWhitelist(address)": FunctionFragment;
    "setApmPerNft(uint256)": FunctionFragment;
    "buy(uint256,uint256)": FunctionFragment;
    "setSaleLimit(uint256)": FunctionFragment;
    "addWhitelist(address[])": FunctionFragment;
    "getSaleDescription()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setStep(uint256)": FunctionFragment;
    "setSaleDescription(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSaleName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSaleTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setApmCoin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSaleTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApmCoin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStep", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNftVoucher",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setSaleName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getApmPerNft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNftVoucher",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSaleCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isWhitelist", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setApmPerNft",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSaleLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleDescription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setStep",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSaleDescription",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSaleName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSaleTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setApmCoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSaleTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getApmCoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getStep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNftVoucher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSaleName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApmPerNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNftVoucher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSaleCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApmPerNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleDescription",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface KApmNftVoucherSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KApmNftVoucherSaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    feeTo(overrides?: CallOverrides): Promise<[string]>;

    getSaleName(overrides?: CallOverrides): Promise<[string]>;

    removeWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSaleLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    setSaleTokenId(
      nftTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApmCoin(
      apmCoinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    getSaleTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getApmCoin(overrides?: CallOverrides): Promise<[string]>;

    getStep(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNftVoucher(overrides?: CallOverrides): Promise<[string]>;

    setSaleName(
      saleNameValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApmPerNft(overrides?: CallOverrides): Promise<[BigNumber]>;

    setNftVoucher(
      nftVoucherAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSaleCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    setSaleCount(
      saleCountValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelist(wallet: string, overrides?: CallOverrides): Promise<[boolean]>;

    setApmPerNft(
      apmPerNftValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      _buyCount: BigNumberish,
      _apmAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleLimit(
      saleLimitValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSaleDescription(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      feeToAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStep(
      stepValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleDescription(
      saleDescriptionValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  feeTo(overrides?: CallOverrides): Promise<string>;

  getSaleName(overrides?: CallOverrides): Promise<string>;

  removeWhitelist(
    wallets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSaleLimit(overrides?: CallOverrides): Promise<BigNumber>;

  setSaleTokenId(
    nftTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApmCoin(
    apmCoinAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  getSaleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  getApmCoin(overrides?: CallOverrides): Promise<string>;

  getStep(overrides?: CallOverrides): Promise<BigNumber>;

  getNftVoucher(overrides?: CallOverrides): Promise<string>;

  setSaleName(
    saleNameValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApmPerNft(overrides?: CallOverrides): Promise<BigNumber>;

  setNftVoucher(
    nftVoucherAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSaleCount(overrides?: CallOverrides): Promise<BigNumber>;

  setSaleCount(
    saleCountValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelist(wallet: string, overrides?: CallOverrides): Promise<boolean>;

  setApmPerNft(
    apmPerNftValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    _buyCount: BigNumberish,
    _apmAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleLimit(
    saleLimitValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWhitelist(
    wallets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSaleDescription(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    feeToAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStep(
    stepValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleDescription(
    saleDescriptionValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    feeTo(overrides?: CallOverrides): Promise<string>;

    getSaleName(overrides?: CallOverrides): Promise<string>;

    removeWhitelist(
      wallets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getSaleLimit(overrides?: CallOverrides): Promise<BigNumber>;

    setSaleTokenId(
      nftTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setApmCoin(
      apmCoinAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    getSaleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    getApmCoin(overrides?: CallOverrides): Promise<string>;

    getStep(overrides?: CallOverrides): Promise<BigNumber>;

    getNftVoucher(overrides?: CallOverrides): Promise<string>;

    setSaleName(
      saleNameValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getApmPerNft(overrides?: CallOverrides): Promise<BigNumber>;

    setNftVoucher(
      nftVoucherAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getSaleCount(overrides?: CallOverrides): Promise<BigNumber>;

    setSaleCount(
      saleCountValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelist(wallet: string, overrides?: CallOverrides): Promise<boolean>;

    setApmPerNft(
      apmPerNftValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      _buyCount: BigNumberish,
      _apmAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSaleLimit(
      saleLimitValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addWhitelist(wallets: string[], overrides?: CallOverrides): Promise<void>;

    getSaleDescription(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(feeToAddress: string, overrides?: CallOverrides): Promise<void>;

    setStep(stepValue: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSaleDescription(
      saleDescriptionValue: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleName(overrides?: CallOverrides): Promise<BigNumber>;

    removeWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSaleLimit(overrides?: CallOverrides): Promise<BigNumber>;

    setSaleTokenId(
      nftTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApmCoin(
      apmCoinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    getApmCoin(overrides?: CallOverrides): Promise<BigNumber>;

    getStep(overrides?: CallOverrides): Promise<BigNumber>;

    getNftVoucher(overrides?: CallOverrides): Promise<BigNumber>;

    setSaleName(
      saleNameValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApmPerNft(overrides?: CallOverrides): Promise<BigNumber>;

    setNftVoucher(
      nftVoucherAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSaleCount(overrides?: CallOverrides): Promise<BigNumber>;

    setSaleCount(
      saleCountValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelist(wallet: string, overrides?: CallOverrides): Promise<BigNumber>;

    setApmPerNft(
      apmPerNftValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      _buyCount: BigNumberish,
      _apmAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleLimit(
      saleLimitValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSaleDescription(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      feeToAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStep(
      stepValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleDescription(
      saleDescriptionValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSaleName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSaleLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setSaleTokenId(
      nftTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApmCoin(
      apmCoinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSaleTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApmCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNftVoucher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setSaleName(
      saleNameValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApmPerNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNftVoucher(
      nftVoucherAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSaleCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setSaleCount(
      saleCountValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelist(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApmPerNft(
      apmPerNftValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      _buyCount: BigNumberish,
      _apmAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleLimit(
      saleLimitValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWhitelist(
      wallets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSaleDescription(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      feeToAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStep(
      stepValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleDescription(
      saleDescriptionValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}