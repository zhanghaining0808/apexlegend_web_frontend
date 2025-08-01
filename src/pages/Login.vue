<template>
    <!-- 登录/注册表单,仅当用户未登录时显示 -->
    <form v-if="!authStore.isLogin" @submit.prevent="handleSubmit">
        <div class="flex flex-col justify-center items-start">
            <!-- 用户名输入框,双向绑定name变量 -->
            <input class="" v-model="name" placeholder="用户名" required>
            <!-- 密码输入框,双向绑定passwd变量 -->
            <input class="" v-model="passwd" type="passwd" placeholder="密码" required>
            <!-- 仅在注册模式显示的手机号输入框 -->
            <input v-if="isSignup" v-model="phone" placeholder="手机号" required>
            <!-- 登录/注册切换链接 -->
            <div class="flex justify-end">
                <p @click="switchSingup">{{ !isSignup ? "还没有账号? 点击我注册" : "返回登录" }} </p>
            </div>
        </div>
        <!-- 提交按钮,根据模式显示不同文字 -->
        <button type="submit">{{ !isSignup ? "登录" : "注册" }}</button>
    </form>

    <!-- 显示当前token状态 -->
    <p>Token is: {{ authStore.token }}</p>
    <!-- 显示登录状态 -->
    <p>Is login: {{ authStore.isLogin }}</p>
</template>

<script setup>
// Vue路由组件
import { useRouter } from 'vue-router';
// Vue 响应式API
import { ref } from 'vue';
// Pinia 状态管理
import { useAuthStore } from '../stores/authStore.js';

// 用户名响应式变量
const name = ref('');
// 路由实例
const router = useRouter();
// 密码响应式变量
const passwd = ref('');
// 手机号响应式变量
const phone = ref('');
// 认证状态库实例
const authStore = useAuthStore();
// 注册模式标识(true=注册模式,false=登录模式)
const isSignup = ref(false)

// 切换登录/注册模式
const switchSingup = () => isSignup.value = !isSignup.value

// 表单提交处理函数 
const handleSubmit = async () => {
    if (isSignup.value) {
        await submitSignup()//注册模式调用注册方法
    } else {
        await submitLogin()//登录模式调用登录方法
    }
}

// 登录提交函数
const submitLogin = async () => {
    // 简单验证字段
    if (!name.value || !passwd.value) return; // 简单验证

    console.log("开始登录");
    // 调用Pinia store的登录方法
    const success = await authStore.loginUser(name.value, passwd.value);

    if (success) {
        alert('登录成功！');
        router.push('/');
    } else {
        alert('登录失败，请检查用户名密码');
    }
};

// 注册提交函数
const submitSignup = async () => {
    console.log("开始注册");
    // 调用Pinia store的注册方法
    const success = await authStore.signupUser(name.value, passwd.value, phone.value)
    if (success) {
        alert('注册成功！');
        router.push('/');
    } else {
        alert('注册失败，请检查用户名密码及手机号');
    }
}
</script>