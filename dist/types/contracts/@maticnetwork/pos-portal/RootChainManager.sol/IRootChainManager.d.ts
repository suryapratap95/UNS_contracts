import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IRootChainManagerInterface extends utils.Interface {
    functions: {
        "cleanMapToken(address,address)": FunctionFragment;
        "depositEtherFor(address)": FunctionFragment;
        "depositFor(address,address,bytes)": FunctionFragment;
        "exit(bytes)": FunctionFragment;
        "mapToken(address,address,bytes32)": FunctionFragment;
        "registerPredicate(bytes32,address)": FunctionFragment;
        "remapToken(address,address,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cleanMapToken" | "depositEtherFor" | "depositFor" | "exit" | "mapToken" | "registerPredicate" | "remapToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "cleanMapToken", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositEtherFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "exit", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "mapToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "registerPredicate", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "remapToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "cleanMapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositEtherFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPredicate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remapToken", data: BytesLike): Result;
    events: {
        "PredicateRegistered(bytes32,address)": EventFragment;
        "TokenMapped(address,address,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PredicateRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenMapped"): EventFragment;
}
export interface PredicateRegisteredEventObject {
    tokenType: string;
    predicateAddress: string;
}
export declare type PredicateRegisteredEvent = TypedEvent<[
    string,
    string
], PredicateRegisteredEventObject>;
export declare type PredicateRegisteredEventFilter = TypedEventFilter<PredicateRegisteredEvent>;
export interface TokenMappedEventObject {
    rootToken: string;
    childToken: string;
    tokenType: string;
}
export declare type TokenMappedEvent = TypedEvent<[
    string,
    string,
    string
], TokenMappedEventObject>;
export declare type TokenMappedEventFilter = TypedEventFilter<TokenMappedEvent>;
export interface IRootChainManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRootChainManagerInterface;
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
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PredicateRegistered(bytes32,address)"(tokenType?: PromiseOrValue<BytesLike> | null, predicateAddress?: PromiseOrValue<string> | null): PredicateRegisteredEventFilter;
        PredicateRegistered(tokenType?: PromiseOrValue<BytesLike> | null, predicateAddress?: PromiseOrValue<string> | null): PredicateRegisteredEventFilter;
        "TokenMapped(address,address,bytes32)"(rootToken?: PromiseOrValue<string> | null, childToken?: PromiseOrValue<string> | null, tokenType?: PromiseOrValue<BytesLike> | null): TokenMappedEventFilter;
        TokenMapped(rootToken?: PromiseOrValue<string> | null, childToken?: PromiseOrValue<string> | null, tokenType?: PromiseOrValue<BytesLike> | null): TokenMappedEventFilter;
    };
    estimateGas: {
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cleanMapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exit(inputData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerPredicate(tokenType: PromiseOrValue<BytesLike>, predicateAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remapToken(rootToken: PromiseOrValue<string>, childToken: PromiseOrValue<string>, tokenType: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IRootChainManager.d.ts.map