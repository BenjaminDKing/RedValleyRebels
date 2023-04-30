// Module for making/handling API Requests
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export const submitEmail = async (token, form) => {
    console.log("API Request from frontend")
    const response = await axios.post(`${SERVER_URL}/submit_email`, {"token": token, "form": form}).then(res => {
        console.log(res);
        return res;
    })
    return response;
}
