import axios from "axios"

export const API_KEY = "edddc749"

const axiosInstance = axios.create({
    baseURL: `http://www.omdbapi.com`,
})

export default axiosInstance