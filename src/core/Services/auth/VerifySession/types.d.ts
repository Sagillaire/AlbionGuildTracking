export interface IGetSession {
    message:        string;
    results:        IGetSessionResults;
}

export interface IGetSessionResults {
    id?:            string;
    rol?:           string;
    token?:         string;
    status?:        string;
    username?:      string;
    isAuth?:        boolean;
    verified?:      boolean;
}