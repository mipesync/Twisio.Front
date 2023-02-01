import { AxiosResponse } from "axios";
import $api from "../http";
import { SignInRequestModel } from "../models/request/signIn.model.request";
import { SignUpRequestModel } from "../models/request/signUp.model.request";
import { SignInResponseModel } from "../models/response/auth.models/signIn.model.response";
import { SignUpResponseModel } from "../models/response/auth.models/signUp.model.response";

export class AuthService {
    static async signIn(data: SignInRequestModel): Promise<AxiosResponse<SignInResponseModel>> {
        return $api.post<SignInResponseModel>('/auth/login', JSON.stringify(data));
    }

    static async signUp(data: SignUpRequestModel): Promise<AxiosResponse<SignUpResponseModel>> {        
        return $api.post<SignUpResponseModel>('/auth/register', JSON.stringify(data));
    }
}