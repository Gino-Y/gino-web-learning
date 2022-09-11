import axios from 'axios'
const service = axios.create({
    baseURL:"http://139.196.42.209:3012/", //基本路径
    //timeout:1000
});
//请求拦截器
service.interceptors.request.use(config=>config);

//响应拦截器
service.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})

export default service;