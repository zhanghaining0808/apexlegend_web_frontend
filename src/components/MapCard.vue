<template>
    <div class="flex space-x-35 px-4 py-6">
        <div class="overflow-hidden h-[400px] shadow-2xl bg-black/30 relative text-white w-[260px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-bottom object-cover"
                :src="`/${name}.png`" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[150px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    {{ name }}
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
const props = defineProps({
    name: {
        type: String,
        required: true //确保name必传 避免undefined
    }
})
console.log(props.name);
</script>