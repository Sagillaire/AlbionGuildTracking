export interface IUserStore {
    rol:            string;
    user:           string;
    isAuth:         boolean;
    loading:        boolean;
    verified:       boolean;
    logout:         () => void;
    setUserLoad:    (isLoad: boolean) => void;
    getSession:     (data: IGetSession) => void;
}

export interface IGetSessionAction {
    user:           string;
    rol:            string;
    verified:       boolean;
    isAuth:         boolean;
}