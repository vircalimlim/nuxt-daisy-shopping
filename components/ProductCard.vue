<template>
    <div class="w-fullsds max-w-md break-inside-avoid px-2">
        <div class="card mb-4 bg-base-500 shadow-xl">
            <div class="text-center">
                <NuxtImg class="w-full sm:w-9/12 inline" fit="cover" :src="product.thumbnail" :alt="product.title"
                    width="200" height="200" style="height: 200px !important;" />
            </div>
            <div class="card-body p-2 py-4">
                <NuxtLink :to="`/product/${product.id}`">
                    <h2 class="card-title capitalize">{{ product.title }}</h2>
                </NuxtLink>
                <p>{{ product.description }}</p>
                <div class="card-actions mt-5">
                    <button class="btn btn-sm btn-neutral my-custom-class">Buy Now</button>
                    <span class="mx-1"></span>
                    <button class="btn btn-sm btn-outline">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>