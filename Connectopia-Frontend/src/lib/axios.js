import axios from "axios";

export const axiosInastance=axios.create({
    baseURL:'http://localhost:5001/api',
    withCredentials:true
})