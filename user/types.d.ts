export declare interface IUser {
    id: number;
    email: string;
    userName: string;
    passwordHash: string;
    mustUpdatePassword: boolean;
}

export type SafeUser = Omit<IUser, 'passwordHash'>;

export type UserUpdate = SafeUser & {
    password: string;
}

export type NewUser = Omit<UserUpdate, 'id'>;
