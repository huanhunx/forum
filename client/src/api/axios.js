//引入axios
import axios from 'axios'
import {
    Message
} from 'element-ui'
import qs from 'qs'
const config = require('./config.js')

axios.defaults.baseURL = config.baseUrl
//设置默认请求头
axios.defaults.headers = {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.timeout = 10000

axios.defaults.withCredentials = true;

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,无效的地址'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = "连接到服务器失败"
    }
    Message.error(error.message)
    return Promise.resolve(error.response)
})

const beforeResolve = function (res) {
    const data = res.data
    if (data.errno === 0) res._succ = true
    let msg = {
        type: '',
        tips: ''
    }
    if (data.errno) {
        let arr = []
        console.log(data)
        switch (data.errno) {
            // case 500001:
            //     {
            //         arr = ['error', `请求方法错误`];
            //         break;
            //     };
            default:
                {
                    if (data.msg) {
                        arr = ['error', data.msg]
                    } else {
                        arr = ['error', `数据异常\n${data.errno}\n${data.msg}`]
                    }
                }
        }
        msg = {
            type: arr[0],
            tips: arr[1]
        }
    } else {
        msg = {
            type: 'success',
            tips: data.msg || ''
        }
    }
    if (msg.tips) {
        Message[msg.type](msg.tips)
    }
}


export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                beforeResolve(res)
                resolve(res)
            })
        })
    },
    //post请求
    post(url, param) {
        param = qs.stringify(param)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                beforeResolve(res)
                resolve(res)
            })
        })
    }
}