export interface UserQueryInterface{
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface UserUpdateInterface{
    id?: number;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
}

