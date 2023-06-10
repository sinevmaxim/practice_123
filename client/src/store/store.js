import { makeAutoObservable } from 'mobx';
import PropertyStore from './property.store.js';
import UserStore from './user.store.js';

export default class Store {
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore(this)
        this.propertyStore = new PropertyStore(this)
    }

    setLoading(isLoading) {
        this.isLoading = isLoading;
    }
}
