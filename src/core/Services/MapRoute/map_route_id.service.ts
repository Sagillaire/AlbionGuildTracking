
import { IMapRouteByID } from "./types";
import { ApiService } from "../../ApiService";

/**
 * Service to manage Map routes
 * @class 
 */
export const MapRouteById = new ApiService<IMapRouteByID>('map_route', 'GuildTrackingUrl')