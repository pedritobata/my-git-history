import axios from 'axios';

const axiosIntance = axios.create({
    baseURL: "https://mygithubhistory.herokuapp.com"
});

export default axiosIntance;