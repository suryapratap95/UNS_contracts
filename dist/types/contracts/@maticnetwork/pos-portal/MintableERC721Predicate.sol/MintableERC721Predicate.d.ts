import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface MintableERC721PredicateInterface extends utils.Interface {
    functions: {
        "BATCH_LIMIT()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MANAGER_ROLE()": FunctionFragment;
        "TOKEN_TYPE()": FunctionFragment;
        "TRANSFER_EVENT_SIG()": FunctionFragment;
        "TRANSFER_WITH_METADATA_EVENT_SIG()": FunctionFragment;
        "WITHDRAW_BATCH_EVENT_SIG()": FunctionFragment;
        "exitTokens(address,address,bytes)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "lockTokens(address,address,address,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BATCH_LIMIT" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "TOKEN_TYPE" | "TRANSFER_EVENT_SIG" | "TRANSFER_WITH_METADATA_EVENT_SIG" | "WITHDRAW_BATCH_EVENT_SIG" | "exitTokens" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "lockTokens" | "onERC721Received" | "renounceRole" | "revokeRole"): FunctionFragment;
    encodeFunctionData(functionFragment: "BATCH_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOKEN_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRANSFER_EVENT_SIG", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRANSFER_WITH_METADATA_EVENT_SIG", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITHDRAW_BATCH_EVENT_SIG", values?: undefined): string;
    encodeFunctionData(functionFragment: "exitTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lockTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "BATCH_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOKEN_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRANSFER_EVENT_SIG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRANSFER_WITH_METADATA_EVENT_SIG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITHDRAW_BATCH_EVENT_SIG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    events: {
        "LockedMintableERC721(address,address,address,uint256)": EventFragment;
        "LockedMintableERC721Batch(address,address,address,uint256[])": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LockedMintableERC721"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockedMintableERC721Batch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface LockedMintableERC721EventObject {
    depositor: string;
    depositReceiver: string;
    rootToken: string;
    tokenId: BigNumber;
}
export declare type LockedMintableERC721Event = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], LockedMintableERC721EventObject>;
export declare type LockedMintableERC721EventFilter = TypedEventFilter<LockedMintableERC721Event>;
export interface LockedMintableERC721BatchEventObject {
    depositor: string;
    depositReceiver: string;
    rootToken: string;
    tokenIds: BigNumber[];
}
export declare type LockedMintableERC721BatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[]
], LockedMintableERC721BatchEventObject>;
export declare type LockedMintableERC721BatchEventFilter = TypedEventFilter<LockedMintableERC721BatchEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface MintableERC721Predicate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MintableERC721PredicateInterface;
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
        BATCH_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        TOKEN_TYPE(overrides?: CallOverrides): Promise<[string]>;
        TRANSFER_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;
        TRANSFER_WITH_METADATA_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;
        WITHDRAW_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;
        exitTokens(arg0: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, log: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BATCH_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    TOKEN_TYPE(overrides?: CallOverrides): Promise<string>;
    TRANSFER_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
    TRANSFER_WITH_METADATA_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
    WITHDRAW_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
    exitTokens(arg0: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, log: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BATCH_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        TOKEN_TYPE(overrides?: CallOverrides): Promise<string>;
        TRANSFER_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
        TRANSFER_WITH_METADATA_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
        WITHDRAW_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<string>;
        exitTokens(arg0: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, log: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LockedMintableERC721(address,address,address,uint256)"(depositor?: PromiseOrValue<string> | null, depositReceiver?: PromiseOrValue<string> | null, rootToken?: PromiseOrValue<string> | null, tokenId?: null): LockedMintableERC721EventFilter;
        LockedMintableERC721(depositor?: PromiseOrValue<string> | null, depositReceiver?: PromiseOrValue<string> | null, rootToken?: PromiseOrValue<string> | null, tokenId?: null): LockedMintableERC721EventFilter;
        "LockedMintableERC721Batch(address,address,address,uint256[])"(depositor?: PromiseOrValue<string> | null, depositReceiver?: PromiseOrValue<string> | null, rootToken?: PromiseOrValue<string> | null, tokenIds?: null): LockedMintableERC721BatchEventFilter;
        LockedMintableERC721Batch(depositor?: PromiseOrValue<string> | null, depositReceiver?: PromiseOrValue<string> | null, rootToken?: PromiseOrValue<string> | null, tokenIds?: null): LockedMintableERC721BatchEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        BATCH_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        TOKEN_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        TRANSFER_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;
        TRANSFER_WITH_METADATA_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;
        WITHDRAW_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;
        exitTokens(arg0: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, log: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BATCH_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOKEN_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRANSFER_EVENT_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRANSFER_WITH_METADATA_EVENT_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITHDRAW_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exitTokens(arg0: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, log: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockTokens(depositor: PromiseOrValue<string>, depositReceiver: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MintableERC721Predicate.d.ts.map