<template>
    <div>
        <div>
            <h1 class="text-pretty text-4xl">Apex Legends 地图</h1>
            <p class="text-balance text-2xl">
                诸王峡谷、世界边缘和奥林匹斯。你曾在那里战斗，也曾在那里战死，但你知道它们为何被选中吗？哈蒙德机器人公司和雇佣兵辛迪加似乎掌控着外域命运的一切……了解更多关于Apex游戏举办地的地图。</p>
        </div>
        <div class="pt-12 flex flex-wrap">
            <MapCard v-for="map in maps" :key="map" :name="map" />
        </div>
    </div>
</template>
<script setup>
import MapCard from '../components/MapCard.vue';
import { ref } from 'vue';
const maps = ref(["残月", "电力区域", "诸王峡谷", "奥林匹斯", "风暴点", "世界尽头"]);
</script>