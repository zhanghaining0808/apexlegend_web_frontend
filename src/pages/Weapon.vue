<template>
    <div class="px-20 pt-12 flex-wrap flex">
        <WeaponCard v-for="weapon in weapons" :name="weapon.name" :type="weapon.type" />
    </div>
</template>

<script setup>
import WeaponCard from '../components/WeaponCard.vue';

import { onMounted, ref } from 'vue';

import { getAllWeapon } from '../api/weapon';

const weapons = ref([]);
const loading = ref(false)

const fetchWeapons = async () => {
    try {
        loading.value = true;
        const response = await getAllWeapon()
        console.log(response.data)
        const resBody = response.data
        weapons.value = resBody.data
    }
    catch (err) {
        console.error(err)
    }
    finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchWeapons()
})
</script>