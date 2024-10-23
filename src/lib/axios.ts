import axios from "axios";
import { error } from "console";
import Cookie from 'js-cookie'


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URI,
    headers: {
        'Content-Type': 'application/json'
    }
})


axiosInstance.interceptors.request.use((config) => {
    const token = Cookie.get('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})


axiosInstance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})



export default axiosInstance