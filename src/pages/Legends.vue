<template>
    <div>
        <h1>这是传奇的页面</h1>
        <div>{{ legends }}</div>
        <li v-for="legend of legends">
            <spen class="text-2xl text-gray-400">{{ legend.name }}</spen> - {{ legend.age }}
        </li>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { getAllHero } from '../api/hero';

const legends = ref([]);
const loading = ref(false);


const fetchLegends = async () => {
    try {
        loading.value = true;
        const response = await getAllHero()
        console.log(response.data)
        legends.value = response.data
    }
    catch (err) {
        console.error(err)
    }
}

onMounted(() => {
    fetchLegends()
})
</script>