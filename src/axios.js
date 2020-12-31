import axios from "axios";


// create instance

const instance = axios.create({
    baseURL: "Backend URL"
});

export default instance;