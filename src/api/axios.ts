import { envConfig } from "@/config";
import axios from "axios";

const api = axios.create({
    baseURL: envConfig.uri,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
