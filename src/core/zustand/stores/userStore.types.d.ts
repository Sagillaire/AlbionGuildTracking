export interface IUserStore {
    user:           string;
    isAuth:         boolean;
    loading:        boolean;
    setUserLoad:    (isLoad: boolean) => void;
    getSession:     (data: IGetSession) => void;
}

export interface IGetSessionAction {
    user:           string;
    isAuth:         boolean;
}