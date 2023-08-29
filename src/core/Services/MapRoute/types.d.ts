// ALL ROUTES INTERFACE
export interface IMapRoute {
    response: IMapRouteResponse[];
}

// ROUTE BY ID
export interface IMapRouteByID {
    _id:        string;
    state:      number;
    created_by: string;
    createdAt:  string;
    updatedAt:  string;
    route_info: RouteInfo[];
}

export interface IMapRouteResponse {
    _id:        string;
    created_by: string;
    route_info: RouteInfo[];
    createdAt:  string;
    updatedAt:  string;
}

export interface RouteInfo {
    time:     Date;
    map_name: string;
    map_zone: string;
    state:    number;
    _id:      string;
}
