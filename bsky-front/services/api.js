import axios from "axios";


export const api = axios.create({
    baseURL: "https://api.ojaum.lat/",
    timeout: 30000,
})