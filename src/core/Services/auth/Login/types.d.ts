export interface IAuthLogin {
    message: string;
    results: Results;
}

export interface Results {
    username: string;
    status:   string;
    isAuth:   boolean;
    token:    string;
}