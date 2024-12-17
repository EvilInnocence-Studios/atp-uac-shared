export declare interface IUser {
    id: number;
    email: string;
    userName: string;
    passwordHash: string;
    mustUpdatePassword: boolean;
}

export type SafeUser = Omit<IUser, 'passwordHash'>;

export type NewUser = Omit<IUser, 'id'>;

export type UserUpdate = NewUser & {
    password?: string;
}