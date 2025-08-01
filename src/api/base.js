// 1.导入axios库 (一个专门用来发HTTP 请求的工具,比如从Vue前端调用后端API)
import axios from 'axios';

// 2.创建一个定制化的axios实例 (相当于给你的请求配置一个"预设模板")
const api = axios.create({
    // 3.基础地址：所有请求都会自动拼上这个前缀
    baseURL: 'http://localhost:25357/api',
    // 4.超时时间(单位毫秒)：如果请求超过五秒没响应，自动终止并报错
    timeout: 5000
});

// 5.导出这个配置好的axios实例 其他文件import后可以直接用
export default api