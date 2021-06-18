import { AxiosRequestConfig } from "ts-axios-new";

export interface R{
    method: string;
    url: string;
    data?: any;
    params?: any;
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

export interface Requests<RequestRes>{
    data: RequestRes;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}
export interface RequestRes<T> {
    code: number;
    data: T[] | string;
}

export interface RequestErr {
    code: number;
    errorMessage: string;
}