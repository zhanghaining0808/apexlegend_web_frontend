<template>
    <div class="flex space-x-40 px-4 py-6">
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

        <div class="overflow-hidden h-[340px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
                :src="zblt" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[120px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    直布罗陀
                </div>
                <div class="text-gray-400">
                    <p>嘿 直布罗陀来找你了</p>
                </div>
                <div class="flex justify-end items-center">
                    <button class="cursor-context-menu mr-3 px-2 rounded-2xl bg-gray-700">More</button>
                </div>
            </div>
        </div>

        <div class="overflow-hidden h-[340px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
                :src="mm" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[120px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    命脉
                </div>
                <div class="text-gray-400">
                    <p>别再抱怨了 去战斗吧</p>
                </div>
                <div class="flex justify-end items-center">
                    <button class="cursor-context-menu mr-3 px-2 rounded-2xl bg-gray-700">More</button>
                </div>
            </div>
        </div>

        <div class="overflow-hidden h-[340px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
                :src="tlz" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[120px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    探路者
                </div>
                <div class="text-gray-400">
                    <p>我很高兴能和你战斗</p>
                </div>
                <div class="flex justify-end items-center">
                    <button class="cursor-context-menu mr-3 px-2 rounded-2xl bg-gray-700">More</button>
                </div>
            </div>
        </div>

        <div class="overflow-hidden h-[340px] shadow-2xl bg-black/30 relative text-white w-[240px] rounded-2xl">
            <img class="w-full transition ease-in-out duration-300 hover:scale-110 h-full rounded-2xl object-cover object-bottom"
                :src="el" alt="">
            <div
                class="absolute z-10 rounded-2xl bottom-0 px-2.5 space-y-2 h-[120px] w-full left-0 flex flex-col bg-gradient-to-t from-black/70 to-transparent">
                <div class="text-[25px]">
                    恶灵
                </div>
                <div class="text-gray-400">
                    <p>有敌人发现我了</p>
                </div>
                <div class="flex justify-end items-center">
                    <button class="cursor-context-menu mr-3 px-2 rounded-2xl bg-gray-700">More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import xxlq from "/apex-寻血猎犬.png"
import zblt from "/apex-直布罗陀.png"
import mm from "/apex-命脉.png"
import tlz from "/apex-探路者.png"
import el from "/apex-恶灵.png"
</script>