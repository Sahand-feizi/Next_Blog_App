import axios from "axios";
import http from "./httpServices";

export async function signupUserApi(data) {
    return await http.post('/user/signup', data).then(({ data }) => data.data)
}

export async function signinUserApi(data) {
    return await http.post('/user/signin', data).then(({ data }) => data.data)
}

export async function getUserApi() {
    return await http.get('/user/profile').then(({ data }) => data.data)
}

export async function logoutUserApi() {
    return await http.post('/user/logout').then(({ data }) => data.data)
}

export async function refreshTokenApi() {
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`, { withCredentials: true }).then(({ data }) => data.data)
}

export async function getAllUsersApi(options) {
    return await http.get('/user/list', options).then(({ data }) => data.data)
}