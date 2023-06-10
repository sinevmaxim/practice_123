import { makeAutoObservable } from 'mobx';
import UserApi from '../api/user.api.js';

export default class UserStore {
    rootStore;
    isAuth = false;
    isLoading = false;
    user = {};

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setAuth(isAuth) {
        this.isAuth = isAuth;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(isLoading) {
        this.isLoading = isLoading;
    }

    async login(email, password) {
        try {
            const response = await UserApi.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.tokens.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async register(email, password, phoneNumber, lastName, firstName) {
        try {
            const response = await UserApi.register(
                email,
                password,
                phoneNumber,
                lastName,
                firstName
            );
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await UserApi.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await UserApi.refresh();
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e)
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
