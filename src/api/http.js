import axios from 'axios';
// import qs from 'qs';
import { tip } from './utils'

console.log(process.env);
// 
let axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 3000 * 10,
	withCredentials: true,
	headers: {
		'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
	}
});
// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;

    if(response){
        errorHandle(response.status, response.data.error)
        return Promise.reject(error);
    }
});

// 导出函数
export default function(method, url, data = null){
    method = method.toLowerCase();
    if(method == 'post'){
        return axiosInstance.post(url, data);
    }else if(method == 'get'){
        return axiosInstance.get(url, {params: data});
    }else if(method == 'delete'){
        return axiosInstance.delete(url, {params: data});
    }else if(method == 'put'){
        return axiosInstance.put(url, data);
    }else{
        console.log('未知方法:' + method);
        return false;
    }
}

// 拦截器：请求失败处理
const errorHandle = (status, msg) => {
    switch(status){
        case 400:
            tip(msg);
            break;
        case 401:
            tip('token 过期');
            break;
        case 403:
            tip('权限不足');
            break;
        case 404:
            tip(msg);
            break;
        default:
            console.log('未发生错误');
    }
}
