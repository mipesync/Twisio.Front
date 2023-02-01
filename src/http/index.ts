import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const API_URL = 'https://localhost:64110/api';

const $api = axios.create({
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${cookies.get('access_token')}`;
    return config;
});

export default $api;