import { R } from "@/interface/Request";
import { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { Interceptors } from "./interceptors";
import { RequestErr } from '../../interface/Request';

// 请求配置
export class HttpServer {
  axios: any;
  // 获取axios实例
  constructor() {
    this.axios = new Interceptors().getInterceptors();
  }
  // 简单封装一下方法
  request<T>(config: R): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this.axios(config).then((res: AxiosResponse) => {
        resolve(res.data);
      }).catch((err: AxiosError<RequestErr>) => {
        reject(err)
      });
    });
  }
}

const http = new HttpServer()

export default http