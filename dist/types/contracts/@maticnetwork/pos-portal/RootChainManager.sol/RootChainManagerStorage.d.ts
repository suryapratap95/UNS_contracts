import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface RootChainManagerStorageInterface extends utils.Interface {
    functions: {
        "childChainManagerAddress()": FunctionFragment;
        "childToRootToken(address)": FunctionFragment;
        "processedExits(bytes32)": FunctionFragment;
        "rootToChildToken(address)": FunctionFragment;
        "tokenToType(address)": FunctionFragment;
        "typeToPredicate(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "childChainManagerAddress" | "childToRootToken" | "processedExits" | "rootToChildToken" | "tokenToType" | "typeToPredicate"): FunctionFragment;
    encodeFunctionData(functionFragment: "childChainManagerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "childToRootToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "processedExits", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "rootToChildToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokenToType", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "typeToPredicate", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "childChainManagerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "childToRootToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processedExits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootToChildToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "typeToPredicate", data: BytesLike): Result;
    events: {};
}
export interface RootChainManagerStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RootChainManagerStorageInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        childChainManagerAddress(overrides?: CallOverrides): Promise<[string]>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
    };
    childChainManagerAddress(overrides?: CallOverrides): Promise<string>;
    childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        childChainManagerAddress(overrides?: CallOverrides): Promise<string>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        childChainManagerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        childChainManagerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        childToRootToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processedExits(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rootToChildToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToType(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        typeToPredicate(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RootChainManagerStorage.d.ts.map