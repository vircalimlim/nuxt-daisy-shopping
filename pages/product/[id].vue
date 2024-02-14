<template>
    <!-- <div class="flex justify-center">
        <ProductCard :product="product" />
    </div> -->
    <div class="flex flex-wrap align-middle justify-center py-4">
        <div class="md:w-1/2 text-center">
            <NuxtImg class="w-full md:w-3/4 h-full md:h-3/4 inline" fit="cover" :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="md:w-1/2 px-4">
            <h1 class="capitalize text-3xl sm:text-4xl md:text-6xl font-semibold">{{ product.title }}</h1>
            <span class="text-xl sm:text-2xl md:text-4xl font-medium mt-2">{{ "$" + product.price.toFixed(2) }}</span>
            <p class="text-gray-500 text-lg sm:text-xl mt-5 text-justify normal-case">{{ product.description }}</p>
            <div class="mt-8">
                <button class="btn btn-neutral btn-sm sm:btn-md md:btn-lg mt-2">Buy Now</button>
                <span class="mx-4"></span>
                <button class="btn btn-outline btn-sm sm:btn-md md:btn-lg mt-2">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const { data: product } = await useFetch(`https://dummyjson.com/products/${id}`, { key: id })
// if (!data) {
//  this.$nuxt.error({ statusCode: 404, message: err.message })
// }
</script>