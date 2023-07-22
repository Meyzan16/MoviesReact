import axios from "axios";

// const apiKey  =import.meta.env.VITE_APP_APIKEY
const base_url  = import.meta.env.VITE_APP_BASEURL;
const token = import.meta.env.VITE_APP_TOKEN;

const headers = {
    Authorization: "bearer " + token
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} = await axios.get(base_url + url, {
            headers,
            params,
        })
    
        return data; 
        // console.log(JSON.stringify(data));
        // console.log("RESPONSE: " + JSON.stringify(data));
        
    } catch (error) {
        console.log(error);
    }
}