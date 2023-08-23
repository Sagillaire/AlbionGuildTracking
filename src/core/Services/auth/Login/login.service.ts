import { IAuthLogin } from "./types";
import { ApiService } from "../../../ApiService";

/**
 * Service to manage Map routes
 * @class 
 */
export const LoginService = new ApiService<IAuthLogin>('auth/login', 'GuildTrackingUrl')