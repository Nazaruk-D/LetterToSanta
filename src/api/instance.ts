import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:7542/',
    // baseURL: 'https://letter-mbxudci3f-nazaruk-d.vercel.app/',
    withCredentials: true,
    headers: {
        "access-control-allow-origin": "https://nazaruk-d.github.io"
    }
})