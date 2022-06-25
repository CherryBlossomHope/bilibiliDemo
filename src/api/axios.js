//二次封装axios
import axios from 'axios';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

var $axios = axios.create({
    baseURL: 'http://81.68.198.249:3002/',
    timeout: 5000,
});
// console.log('axios', this)
// Add a request interceptor
$axios.interceptors.request.use(function (config) {
    // console.log('request');
    // console.log(config)
    if (Vue.$cookies.get('token')) {
        config.headers.token = Vue.$cookies.get('token')
    }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
$axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response');
    // console.log(response);
    if (response.status == 200) {
        return response.data
    } else {
        alert('服务器出错')
    }
    return;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default $axios; //暴露axios实例
