import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface SimpleCheckpointManagerInterface extends utils.Interface {
    functions: {
        "currentCheckpointNumber()": FunctionFragment;
        "headerBlocks(uint256)": FunctionFragment;
        "setCheckpoint(bytes32,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "currentCheckpointNumber" | "headerBlocks" | "setCheckpoint"): FunctionFragment;
    encodeFunctionData(functionFragment: "currentCheckpointNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "headerBlocks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setCheckpoint", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "currentCheckpointNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headerBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCheckpoint", data: BytesLike): Result;
    events: {
        "NewHeaderBlock(address,uint256,uint256,uint256,uint256,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewHeaderBlock"): EventFragment;
}
export interface NewHeaderBlockEventObject {
    proposer: string;
    headerBlockId: BigNumber;
    reward: BigNumber;
    start: BigNumber;
    end: BigNumber;
    root: string;
}
export declare type NewHeaderBlockEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], NewHeaderBlockEventObject>;
export declare type NewHeaderBlockEventFilter = TypedEventFilter<NewHeaderBlockEvent>;
export interface SimpleCheckpointManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimpleCheckpointManagerInterface;
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
        currentCheckpointNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        headerBlocks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            root: string;
            start: BigNumber;
            end: BigNumber;
            createdAt: BigNumber;
            proposer: string;
        }>;
        setCheckpoint(rootHash: PromiseOrValue<BytesLike>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    currentCheckpointNumber(overrides?: CallOverrides): Promise<BigNumber>;
    headerBlocks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        root: string;
        start: BigNumber;
        end: BigNumber;
        createdAt: BigNumber;
        proposer: string;
    }>;
    setCheckpoint(rootHash: PromiseOrValue<BytesLike>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        currentCheckpointNumber(overrides?: CallOverrides): Promise<BigNumber>;
        headerBlocks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            root: string;
            start: BigNumber;
            end: BigNumber;
            createdAt: BigNumber;
            proposer: string;
        }>;
        setCheckpoint(rootHash: PromiseOrValue<BytesLike>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "NewHeaderBlock(address,uint256,uint256,uint256,uint256,bytes32)"(proposer?: PromiseOrValue<string> | null, headerBlockId?: PromiseOrValue<BigNumberish> | null, reward?: PromiseOrValue<BigNumberish> | null, start?: null, end?: null, root?: null): NewHeaderBlockEventFilter;
        NewHeaderBlock(proposer?: PromiseOrValue<string> | null, headerBlockId?: PromiseOrValue<BigNumberish> | null, reward?: PromiseOrValue<BigNumberish> | null, start?: null, end?: null, root?: null): NewHeaderBlockEventFilter;
    };
    estimateGas: {
        currentCheckpointNumber(overrides?: CallOverrides): Promise<BigNumber>;
        headerBlocks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setCheckpoint(rootHash: PromiseOrValue<BytesLike>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        currentCheckpointNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headerBlocks(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCheckpoint(rootHash: PromiseOrValue<BytesLike>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SimpleCheckpointManager.d.ts.map