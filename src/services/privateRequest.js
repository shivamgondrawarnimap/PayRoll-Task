import axios from "axios";
import { getToken } from "utils/utils";
import toast from "components/shared/toast/toast";

const privateRequest = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

const requestHandler = (request) => {
    const token = getToken() || ""
    request.headers.Authorization = `Bearer ${token}`
    request.headers['x-user-role'] = localStorage.getItem("currentRole")
    return request
}

const clearToken = () => {
    localStorage.removeItem("token")
}

const responseErrorHandler = (error) => {
    if (error.response) {
        const { status, data, message } = error.response

        switch (status) {
            case 401:
                clearToken()
                window.location.href = "/"
                toast.warn("Token expired, please login")
                break;
            case 400:
                toast.error(data.message ? data.message : message || "Invalid Value/ Bad Request")
                break;
            case 403:
                toast.error(data.message ? data.message : message || "Access Denied/ Forbidden")
                break;
            case 404:
                // toast.error(data.message ? data.message : message || "Item doesn't exist")
                break;
            case 405:
                toast.error(data.message ? data.message : message || "Invalid Request")
                break;
            case 422:
                toast.error(data.message ? data.message : message || "Already Exists")
                break;
            case 504:
                toast.error(data.message ? data.message : message || "Network Error")
                break;
            default:
                toast.error(data.message ? data.message : message || "Some Error Occurred")
                break;
        }
    }
    else {
        toast.error(error?.message || "Some Error Occurred")
    }
}

const errorHandler = (error) => {
    return Promise.reject(error)
}

privateRequest.interceptors.request.use(
    requestHandler,
    errorHandler
)

privateRequest.interceptors.response.use(
    response => response,
    responseErrorHandler
)

export const privateGet = (endPoint, config = {}) => {
    return privateRequest.get(`${endPoint}`, config)
}

export const privatePost = (endPoint, data, config = {}) => {
    return privateRequest.post(endPoint, data, config)
}

export const privatePut = (endPoint, id, data) => {
    return privateRequest.put(`${endPoint}/${id}`, data)
}

export const privatePatch = (endPoint, id, data) => {
    return privateRequest.put(`${endPoint}/${id}`, data)
}

export const privateDelete = (endPoint, id) => {
    return privateRequest.delete(`${endPoint}/${id}`)
}

export default privateRequest