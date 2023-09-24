import axios from "axios";

axios.defaults.baseURL = "https://hike-scout-api-eba1d52cdbb4.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
