import axios from 'axios';

const apiUrl = 'http://localhost:8800';
const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        console.log('Refresh token retry')
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(`${apiUrl}/api/auth/refresh`, {
                    withCredentials: true,
                });
                localStorage.setItem('token', response.data.accessToken);
                return api.request(originalRequest);
            } catch (e) {
                console.log('Not Authorized');
            }
        }
        throw error;
    }
);

export { api, apiUrl };
