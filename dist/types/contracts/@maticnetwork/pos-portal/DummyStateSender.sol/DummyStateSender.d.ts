import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface DummyStateSenderInterface extends utils.Interface {
    functions: {
        "syncState(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "syncState"): FunctionFragment;
    encodeFunctionData(functionFragment: "syncState", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "syncState", data: BytesLike): Result;
    events: {
        "StateSynced(uint256,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "StateSynced"): EventFragment;
}
export interface StateSyncedEventObject {
    id: BigNumber;
    contractAddress: string;
    data: string;
}
export declare type StateSyncedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], StateSyncedEventObject>;
export declare type StateSyncedEventFilter = TypedEventFilter<StateSyncedEvent>;
export interface DummyStateSender extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DummyStateSenderInterface;
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
        syncState(receiver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    syncState(receiver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        syncState(receiver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "StateSynced(uint256,address,bytes)"(id?: PromiseOrValue<BigNumberish> | null, contractAddress?: PromiseOrValue<string> | null, data?: null): StateSyncedEventFilter;
        StateSynced(id?: PromiseOrValue<BigNumberish> | null, contractAddress?: PromiseOrValue<string> | null, data?: null): StateSyncedEventFilter;
    };
    estimateGas: {
        syncState(receiver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        syncState(receiver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DummyStateSender.d.ts.map