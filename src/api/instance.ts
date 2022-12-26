import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://backend-enshknqmq-nazaruk-d.vercel.app/',
    withCredentials: true,
})