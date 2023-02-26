import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://backend-k3moe0viz-nazaruk-d.vercel.app/',
    // baseURL: 'http://localhost:7542/',
    withCredentials: true,
})