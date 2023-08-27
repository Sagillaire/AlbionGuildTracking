export interface IMapRoute {
    response: Response[];
}

export interface Response {
    _id:        string;
    created_by: string;
    route_info: RouteInfo[];
    createdAt:  Date;
    updatedAt:  Date;
}

export interface RouteInfo {
    time:     string;
    map_name: string;
    map_zone: string;
    _id:      string;
    state?:   string;
}
