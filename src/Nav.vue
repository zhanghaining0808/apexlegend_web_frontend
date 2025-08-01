<script setup>
import { onMounted, ref } from 'vue';
import apexlogo from "/apexlogo.jpg"
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore()

const navs = ref([
    { tag: "主页", path: "/" },
    { tag: "传奇", path: "/legends" },
    { tag: "武器", path: "/weapon" },
    { tag: "地图", path: "/map" },
    { tag: "登录", path: "/login" },
]);
const getLoginUserTag = (tag, path) => {
    if (path != '/login') {
        return tag
    }
    else if (!authStore.isLogin) {
        return tag
    }
    else {
        return authStore.user.name
    }
}

</script>

<template>
    <div class="flex px-10 justify-between items-center w-full h-14">

        <!-- 左 -->
        <div class="flex justify-center items-center space-x-2">
            <img :src="apexlogo" alt="APEX logo" class="h-14">
            <div class="text-2xl">APEX</div>
        </div>

        <!-- 右 -->
        <!-- px:水平内边距 py：垂直内边距 -->
        <!-- transition-colors: 实现颜色过渡动画 -->
        <div class="space-x-6">
            <RouterLink v-for="(item, index) in navs" :key="index" :to="item.path"
                class="hover:text-red-400 font-bold rounded-3xl px-4 py-1 duration-300 transition-colors">
                {{ getLoginUserTag(item.tag, item.path) }}
            </RouterLink>
            <button v-if="authStore.isLogin" @click="authStore.logout"
                class="hover:text-red-400 font-bold rounded-3xl px-4 py-1 duration-300 transition-colors">退出登录</button>
        </div>
    </div>

</template>
