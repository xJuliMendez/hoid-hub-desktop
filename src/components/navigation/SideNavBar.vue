<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiClient } from '../../api/apiClient'
import { SideNavBarItemResponse } from './sideNavBar.interface';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationList = ref<SideNavBarItemResponse[]>([]);
onMounted(async () => {
    const response = await apiClient.get<SideNavBarItemResponse[]>('/api/home/side-nav-bar');
    navigationList.value = response.data;
})
</script>

<template>
    <div w-20 h-auto rounded bg-red-400 py-3 px-1>
        <div py-3 v-for="(navigationItem, index) in navigationList" :key="index"
            @click="router.push({ name: navigationItem.route })">
            {{ navigationItem.label }}
        </div>
    </div>
</template>