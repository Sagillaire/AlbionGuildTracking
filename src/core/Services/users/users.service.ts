import { ApiService } from "../../ApiService";
import { IUser } from "./types";

/**
 * This servie is used to get users
 * @class 
 */
export const Users = new ApiService<IUser>('users', 'GuildTrackingUrl')