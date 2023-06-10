import { api } from "./axios.js"

export default class FileApi {
    static getFile = async (path) => {
        return api.get(path)
    }
}