import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-media-project-535bc.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;