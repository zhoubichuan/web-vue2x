import axios from "axios";
import { Message, MessageBox } from "element-ui";
import { getToken } from "@/util/auth";

// 创建axios实例
let baseURL = "/web-vue2x/";
try {
  baseURL = process ? process.env?.BASE_API : "/web-vue2x/";
} catch (e) {}
const service = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response;
    if (res.status !== 200) {
      Message({
        message: res.data.message,
        type: "error",
        duration: 5 * 1000,
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (
        res.status === 50008 ||
        res.status === 50012 ||
        res.status === 50014
      ) {
        MessageBox.confirm(
          "你已被登出，可以取消继续留在该页面，或者重新登录",
          "确定登出",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      }
    } else {
      return Promise.resolve(res.data.result);
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
