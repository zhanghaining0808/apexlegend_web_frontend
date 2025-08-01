import api from "./base"

// 调用api.post方法 请求后端接口
const signUp = (username, passwd, phone) => api.post("/users/add", { "name": username, "passwd": passwd, "phone": phone })

const login = (username, passwd) => api.post("/users/login", { "name": username, "passwd": passwd })

const tokenLogin = (token) => api.post(`/users/login/${token}`)

export { login, tokenLogin, signUp }