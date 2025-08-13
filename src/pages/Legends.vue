<template>
    <div class="px-20 pt-12 flex-wrap flex">
        <HeroCard v-for="legend in legends" :name="legend.name" :describe="legend.describe" />
    </div>
</template>

<!-- ref([]):创建响应式数组,数据变化时视图会自动更新 -->
<!-- onMounted:生命周期钩子,组件加载完成后执行 -->
<!-- async/await:的处理异步操作,使代码更易读 -->
<script setup>
import HeroCard from '../components/HeroCard.vue';
// 脚本部分：定义组件逻辑

// 从Vue中导入需要的函数 
import { onMounted, ref } from 'vue';
// 导入获取英雄数据的API函数
import { getAllHero } from '../api/hero';

// 定义响应式数据
const legends = ref([]);//存储英雄列表数据
const loading = ref(false);//加载状态(虽然定义了但未在模板中使用)

// 定义获取英雄数据的异步函数(Async/Await)
// 异步函数是JavaScript中处理异步操作的现代方式，它让异步代码看起来更像同步代码，提高了代码可读性和可维护性
const fetchLegends = async () => {
    try {
        loading.value = true;//开始加载
        const response = await getAllHero()//调用API获取数据
        console.log(response.data)//打印获取的数据
        const resBody = response.data
        legends.value = resBody.data//将数据存入legends
    }
    catch (err) {
        console.error(err)//捕获并打印错误
    }
    finally {
        loading.value = false;
    }
}
// 组件挂载完成后自动调用fetchLegends获取数据
onMounted(() => {
    fetchLegends()
})
</script>