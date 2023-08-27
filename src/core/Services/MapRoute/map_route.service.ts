import { IMapRoute } from "./types";
import { ApiService } from "../../ApiService";

/**
 * Service to manage Map routes
 * @class 
 */
export const MapRoute = new ApiService<IMapRoute>('map_route', 'GuildTrackingUrl')
