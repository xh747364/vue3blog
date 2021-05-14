import { dataResult, R } from "@/interface/Request";
import http from "@/plugins/http"
import { reactive, ToRefs, toRefs } from "@vue/reactivity"
import { AxiosError, AxiosResponse } from 'axios';
import { PostsGet } from '../interface/Request';

export const Request = <T>({method, url, data}: R<T>): ToRefs => {

    const dataResult: dataResult = reactive({
        loading: true,
        data: null,
        errMessage: ''
    })

    const params: R<PostsGet> = {
        url: url,
        method: method,
    }

    if(method == "get"){
        params['params'] = data
    }else{
        params['data'] = data
    }

    http.request(params)
    .then((res: AxiosResponse) => {
        dataResult.loading = false;
        dataResult.data = res.data.data;
    })
    .catch((err: AxiosError) => {
        dataResult.loading = false;
        dataResult.errMessage = err.message;
    })

    return {
        ...toRefs(dataResult)
    }
}
