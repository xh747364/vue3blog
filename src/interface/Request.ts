export interface R<T>{
    method: string;
    url: string;
    data?: T;
    params?: T;
}

export interface dataResult{
    loading: boolean;
    data: null;
    errMessage: string;
}

export interface PostsGet{
    page?: number;
    isDelete?: number;
}