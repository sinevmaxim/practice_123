import { api } from "./axios.js"


export default class PropertyApi {

    static getAllProperties = async () => {
        return api.get('/api/property')
    }
    
    static getOneProperty = async (id) => {
        return api.post(`/api/property/${id}`)
    }
    
    static deleteProperty = async (id) => {
        return api.delete(`/api/property/${id}`)
    }
}