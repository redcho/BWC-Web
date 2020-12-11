import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wow-crawler.firebaseio.com/'
});

export default instance;