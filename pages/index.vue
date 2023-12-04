<script setup lang="ts">
const route = useRoute();
const { data: products } = await useFetch(`/api/products`);
</script>

<template>
  <ProductList :products="products" />
</template>
