import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/kisaanvend/us-central1/api' // The api(cloud function) URL
});

export default instance;