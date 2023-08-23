export interface IGetSession {
    message:        string;
    results:        IGetSessionResults;
}

export interface IGetSessionResults {
    username?:      string;
    status?:        string;
    verified?:      boolean;
    isAuth?:        boolean;
    id?:            string;
    token?:         string;
}