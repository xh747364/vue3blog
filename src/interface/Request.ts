export interface R<T>{
    method: string;
    url: string;
    data?: T
}

export interface dataResult{
    loading: boolean;
    data: null;
    errMessage: string;
}