export declare interface IRole {
    id: string;
    name: string;
    description: string;
}

export declare type NewRole = Omit<IRole, "id">;

