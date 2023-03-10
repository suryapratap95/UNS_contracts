import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ITokenPredicateInterface extends utils.Interface {
    functions: {
        "exitTokens(address,address,bytes)": FunctionFragment;
        "lockTokens(address,address,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exitTokens" | "lockTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "lockTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "exitTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
    events: {};
}
export interface ITokenPredicate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenPredicateInterface;
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
        exitTokens(sender: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, logRLPList: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exitTokens(sender: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, logRLPList: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exitTokens(sender: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, logRLPList: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exitTokens(sender: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, logRLPList: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exitTokens(sender: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, logRLPList: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ITokenPredicate.d.ts.map