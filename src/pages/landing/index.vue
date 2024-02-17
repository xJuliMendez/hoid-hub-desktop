<script lang="ts" setup>
import Card from '../../components/card/Card.vue';


const text = {
    title: 'Registro de contenido',
    body: 'bodo',
    footer: 'futer',

}

</script>
<template>
    <div class="landing-page"></div>
    <h1 color-white>Welcome to the Landing Page!</h1>
    <p color-white>Feel free to customize this page to fit your needs.</p>
    <div class="landing-page-container">
        <Card :content="text">
            <template #header-media>
                <div class="text-4xl font-bold i-arcticons:diary" />
            </template>
        </Card>
    </div>
</template>



<style scoped>
.container-landing-page {
    text-align: center;
    padding: 20px;
}
</style>
