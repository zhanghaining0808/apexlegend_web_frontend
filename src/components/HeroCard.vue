<template>
    <div class="flex space-x-35 px-4 py-6">
        <!-- overflow-hidden:隐藏溢出内容 -->
        <!-- bg-black-2xl:半透明黑色背景 -->
        <!-- relative:相对定位  -->
        <!-- transition:过渡动画效果 -->
        <!-- ease-in-out:缓动函数 -->
        <!-- duration-300:持续时间 -->
        <!-- hover:scale:悬停放大 -->
        <!-- object-cover:图片填充方法 -->
        <!-- object-bottom:图片对齐底部 -->
        <!-- absolute 是 CSS 的 position 定位属性 的一个值，全称是 position: absolute;，表示 绝对定位-->
        <!-- z-:堆叠顺序 -->
        <!-- bg-gradient-to-t from-black/70 to-transparent:从70％透明黑色到完全透明的渐变背景 -->
        <div class="overflow-hidden h-[360px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
                :src="`/apex-${props.name}.png`" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[150px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    {{ props.name }}
                </div>
                <div class="text-gray-400">
                    {{ getDescribe(props.describe) }}
                </div>
                <div class="flex justify-end items-center">
                    <button
                        class="cursor-context-menu mr-3 px-4 py-1 rounded-2xl bg-gray-700/70 hover:bg-gray-600">More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["name", "describe"])
console.log(props.name, props.describe)
// difineProps是仅在内部可用的编译器宏

const getDescribe = (describe) => `${describe.slice(0, 24)} -...`
</script>