import { makeAutoObservable } from 'mobx';
import PropertyApi from '../api/property.api.js';

export default class PropertyStore {
    rootStore;
    isLoading = false;
    properties = []

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setProperties(properties) {
        this.properties = properties
    }

    async getAllProperties() {
        this.setLoading(true)
        try {
            console.log('HERE');
            const response = await PropertyApi.getAllProperties();
            console.log(response);
            this.setProperties(response.data.properties);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false)
        }
    }

    setLoading(isLoading) {
        console.log('Changed loading in property on '+isLoading)
        this.isLoading = isLoading;
    }
}
