import { Payload } from "../models/payload.model";

export function parseJWt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    let payload  = JSON.parse(jsonPayload);
    return {
        username: payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        role: payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        userId: payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    } as Payload;
}