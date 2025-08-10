<template>
    <div class="overflow-hidden h-[340px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
        <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
            :src="xxlq" alt="">

        <div
            class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[120px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
            <div class="text-[25px]">
                寻血猎犬
            </div>
            <div class="text-gray-400">
                <p>我愿洒下鲜血向众神之父致敬</p>
            </div>
            <div class="flex justify-end items-center">
                <button class="cursor-context-menu mr-3 px-2 rounded-2xl bg-gray-700">More</button>
            </div>

        </div>

    </div>
</template>

<script setup>
import xxlq from "/apex-xxlq.png"
</script>