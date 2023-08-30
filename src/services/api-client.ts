import axios from "axios";
import 'dotenv/config';


process.env.API_KEY 
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: process.env.API_KEY
    }
})