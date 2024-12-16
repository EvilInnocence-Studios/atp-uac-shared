import { IPermission } from "../permissions/types";
import { SafeUser } from "../user/types.d";

export declare interface ILoginRequest {
    userName: string;
    password: string;
}

export declare interface ILoginResponse {
    user: SafeUser;
    permissions: IPermission[];
    loginToken: string;
}
