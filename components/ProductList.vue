<!-- Product List component for the Home page -->

<script setup lang="ts">
const props = defineProps(["products"]);
</script>

<template>
  <section class="flex flex-col">
    <div
      v-for="(product, index) in props.products"
      :key="index"
      class="flex flex-col md:flex-row gap-x-5 py-8 border-b border-white/50 last:border-b-transparent"
    >
      <ProductCard :product="product">
        <NuxtLink
          class="inline-block mt-2 bg-white text-black font-black uppercase px-7 py-3 rounded-full mt-4 hover:bg-primary transition-colors"
          :to="`/product/${product.slug}`"
          >View Product</NuxtLink
        >
      </ProductCard>
    </div>
  </section>
</template>
