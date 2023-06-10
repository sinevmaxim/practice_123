import { api } from "./axios.js"

export default class RentApplicationApi {
    static create = async (data) => {
        return api.post('/api/rentApplication', data)
    }
}