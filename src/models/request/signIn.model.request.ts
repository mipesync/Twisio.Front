export interface SignInRequestModel {
    username: string;
    password: string;
    rememberMe: boolean;
    returnUrl?: string;
}