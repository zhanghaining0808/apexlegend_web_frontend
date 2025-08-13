// 1.初始化store
import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue'; // 
import { login, signUp, tokenLogin } from '../api/user'; //

// 使用defineStore定义一个名为"auth"的(store),该store使用组合式API编写
export const useAuthStore = defineStore("auth", () => {
    // 2.状态管理
    const user = ref({})
    const token = ref('');
    const isLogin = ref(false);
    // 3.自动登录逻辑
    // onMounted: Vue生命周期钩子，在组件挂载后执行
    onMounted(async () => {
        // 在store加载好之后尝试自动登录
        await tokenLoginUser()
    });
    // 登录状态开关
    const setIsLoginToTrue = () => isLogin.value = true
    const setIsLoginToFalse = () => isLogin.value = false


    // 4.Token自动登录实现
    const tokenLoginUser = async () => {
        // 查看本地储存Token
        const savedToken = localStorage.getItem("userToken");

        if (savedToken) {
            token.value = savedToken;

            try {
                // res:respond 回应
                const res = await tokenLogin(token.value)
                const resBody = res.data
                user.value = {
                    "name": resBody.data.user.name,
                    "phone": resBody.data.user.phone
                }
                isLogin.value = true;
            } catch (error) {
                console.error(error)
            }
        }
    }
    // 5.用户注册功能
    const signupUser = async (username, password, phone) => {
        if (!username || !password || !phone) {
            alert("用户名,密码和手机号均不能为空!");
        }
        if (password.length < 6) {
            alert("密码长度不能少于6位");
        }
        try {
            const res = await signUp(username, password, phone);
            const resBody = res.data
            token.value = resBody.data.access_token;
            user.value = {
                "name": resBody.data.user.name,
                // "passwd": res.data.user.passwd,
                "phone": resBody.data.user.phone
            }
            localStorage.setItem('userToken', token.value);
            isLogin.value = true;
            return { success: true, user: user.value };
        } catch (error) {
            console.error("注册失败:", error);

        }
        return false;
    }
    //  6.用户登录功能
    const loginUser = async (username, password) => {
        try {
            const res = await login(username, password); // 调用API登录
            const resBody = res.data
            token.value = resBody.data.access_token;
            isLogin.value = true;
            user.value = {
                "name": resBody.data.user.name,
                "phone": resBody.data.user.phone
            }
            localStorage.setItem('userToken', token.value);
            return true;
        } catch (error) {
            console.error("登录失败:", error);
            return false;
        }
    };

    //  7.登出功能
    const logout = () => {
        token.value = '';
        isLogin.value = false
        localStorage.removeItem('userToken');
    };

    //  8.暴露状态和方法
    return {
        token,
        isLogin,
        user,
        signupUser,
        loginUser,
        logout,
        setIsLoginToFalse,
        setIsLoginToTrue
    };
}); // ✅ Store的作用域在这里结束