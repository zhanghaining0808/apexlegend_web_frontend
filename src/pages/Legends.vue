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
import axios from 'axios';

const legends = ref([]);
const loading = ref(false);


const fetchLegends = async () => {
    try {
        loading.value = true;
        const response = await axios.get("http://127.0.0.1:25357/heroes/query");
        console.log(response.data)
        legends.value = response.data

    }
    catch (err) {

    }
}

onMounted(() => {
    fetchLegends()
})
</script>