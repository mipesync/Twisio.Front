export interface SignUpRequestModel {
    username: string;
    email: string;
    password: string;
    roleId: string;
    returnUrl?: string;
}