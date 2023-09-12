export interface IUser {
    response: Response[];
}

export interface Response {
    _id:       string;
    username:  string;
    verified:  boolean;
    rol:       string;
    status:    string;
    createdAt: Date;
    updatedAt: Date;
}