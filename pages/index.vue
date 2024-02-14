<script setup lang="ts">
const { data } = await useFetch('https://dummyjson.com/products')
</script>

<template>
    <div class="md:container m-auto py-6">
        <h1 class="text-5xl font-bold mb-8">Products</h1>
        <div class="columns-1 sm:columns-2 md:columns-3 lg:colums-4 gap-2">
            <ProductCard v-for="product in data.products" :product="product" />
        </div>
    </div>
</template>
  