import { IGetSession } from "./types";
import { ApiService } from "../../../ApiService";

/**
 * Service to manage Map routes
 * @class 
 */
export const GetSessionService = new ApiService<IGetSession>('auth/verifySession', 'GuildTrackingUrl')