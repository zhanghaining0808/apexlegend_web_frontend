import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:25357/api', // 后端地址
    timeout: 5000
});

export default api