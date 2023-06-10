import axios from "axios"
import { api, apiUrl } from "./axios.js"


export default class UserApi {

    static login = async (email, password) => {
        return api.post('/api/auth/login', {email, password})
    }
    
    static register = async (email, password, phoneNumber, lastName, firstName) => {
        return api.post('/api/auth/register', {email, password, phoneNumber, lastName, firstName})
    }
    
    static logout = async () => {
        return api.post('/api/auth/logout')
    }

    static refresh = async () => {
        return axios.get(`${apiUrl}/api/auth/refresh`, {withCredentials: true});
    }
}