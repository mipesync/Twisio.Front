import { makeAutoObservable } from "mobx";
import { SignInRequestModel } from "../models/request/signIn.model.request";
import { UserShortDetails } from "../models/userShortDetails.model";
import { AuthService } from "../services/auth.service";import Cookies from 'universal-cookie';
import axios from "axios";
import { SignUpRequestModel } from "../models/request/signUp.model.request";
import { UserService } from "../services/user.service";
import { parseJWt } from "../actions/JwtParse";
import { API_URL } from "../http";
import { SignInResponseModel } from "../models/response/auth.models/signIn.model.response";
import { RoleResponseModel } from "../models/response/role.model.response";

const cookies = new Cookies();

export class Store {
    user = {} as UserShortDetails;
    roles = {} as RoleResponseModel[];
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: UserShortDetails) {
        this.user = user;
    }

    setRoles(roles: RoleResponseModel[]) {
        this.roles = roles;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async signIn(data: SignInRequestModel) {
        const JwtResponse = await AuthService.signIn(data);                
        cookies.set('access_token', JwtResponse.data.access_token, { expires: new Date(JwtResponse.data.expires!) });
        if (JwtResponse.data.refresh_token) {
            localStorage.setItem('refresh_token', JwtResponse.data.refresh_token);
        }
        this.setAuth(true);

        const detailsResponse = await UserService.getShortDetails(parseJWt(JwtResponse.data.access_token).userId);
        localStorage.setItem('user', JSON.stringify(detailsResponse.data));            
        this.setUser(detailsResponse.data);
    }

    async signUp(data: SignUpRequestModel) {
        await AuthService.signUp(data);
    }

    async refreshToken() {
        this.setLoading(true);

        const JwtResponse = await axios.put<SignInResponseModel>(`${API_URL}/auth/refresh_token?refresh=${localStorage.getItem('refresh_token')}`);

        cookies.set('access_token', JwtResponse.data.access_token, { expires: new Date(JwtResponse.data.expires! || JwtResponse.data.expire!) });
        if (JwtResponse.data.refresh_token) {
            localStorage.setItem('refresh_token', JwtResponse.data.refresh_token);
        }
        this.setAuth(true);

        const detailsResponse = await UserService.getShortDetails(parseJWt(JwtResponse.data.access_token).userId);
        localStorage.setItem('user', JSON.stringify(detailsResponse.data));            
        this.setUser(detailsResponse.data);

        this.setLoading(false);
    }

    checkAuth() {
        if (cookies.get("access_token")) {
            this.setAuth(true);
            this.setUser(JSON.parse(localStorage.getItem('user')!));
        }
    }

    async fetchRoles() {
        const response = await UserService.getRoles();
        response.data.roles.forEach((role) => {
            if (role.name === 'author') role.name = 'Автор';
            if (role.name === 'user') role.name = 'Пользователь';
        });
        this.setRoles(response.data.roles);   
        localStorage.setItem('roles', JSON.stringify(response.data.roles));
    }
}