import axios from 'axios';

const api = axios.create({
    baseURL: 'https://express-photogram.herokuapp.com/'/*'http://localhost:3333'*/
})

export default api;