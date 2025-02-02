export declare interface IPermission {
    id: string;
    name: string;
    description: string;
}

export declare type NewPermission = Omit<IPermission, "id">;
