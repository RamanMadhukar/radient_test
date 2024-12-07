import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'https://reqres.in/api';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const loginApiPath = '/login'

export const loginApi = (data) => {
    return axiosInstance.post(loginApiPath, data)
}