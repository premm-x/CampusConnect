import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/", // Change this to match your backend URL

});

export default axiosInstance;

