export declare interface IUser {
    id: string;
    email: string;
    userName: string;
    passwordHash: string;
    mustUpdatePassword: boolean;
    prefix: string;
    firstName: string;
    lastName: string;
    suffix: string;
    subscriptionId: string | null;
    createdAt: string;
}

export type SafeUser = Omit<IUser, 'passwordHash'>;

export type UserUpdate = SafeUser & {
    password: string;
}

export type NewUser = Omit<UserUpdate, 'id'>;
