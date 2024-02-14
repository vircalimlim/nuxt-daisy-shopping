<template>
    <div class="container-fluid">
        <div class="max-w-1/2 card bg-white text-center mx-auto p-5">
            <h1 class="text-9xl">404</h1>
            <div class="text-5xl">Ooops.</div>
            <NuxtLink to="/" class="mt-4 btn btn-sm btn-primary">Go Home</NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>
.container-fluid {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
}
</style>