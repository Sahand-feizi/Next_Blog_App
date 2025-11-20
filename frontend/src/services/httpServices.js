import axios from 'axios'
import { refreshTokenApi } from './authServices';

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})

app.interceptors.response.use(
    res => res,
    async (error) => {
        const originalConfig = error.config;
        if (error?.response?.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const data = await refreshTokenApi()
                if (data) return app(originalConfig)
            } catch (err) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(error)
    }
)

const http = {
    get: app.get,
    post: app.post,
    patch: app.patch,
    delete: app.delete,
    put: app.put
}

export default http