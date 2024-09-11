import axios from "axios";


export const api = axios.create({
    baseURL: "http://api.ojaum.live/search",
    timeout: 8000,
})