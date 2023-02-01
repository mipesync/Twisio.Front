import { AxiosResponse } from "axios";
import $api from "../http";
import { RolesModelDto } from "../models/response/roles.model.dto";
import { UserShortDetails } from "../models/userShortDetails.model";

export class UserService {
    static getShortDetails(userId: string): Promise<AxiosResponse<UserShortDetails>> {
        return $api.get<UserShortDetails>(`/user/get_short_details?userId=${userId}`);
    }

    static getRoles(): Promise<AxiosResponse<RolesModelDto>> {
        return $api.get<RolesModelDto>(`/user/get_roles`);
    }
}