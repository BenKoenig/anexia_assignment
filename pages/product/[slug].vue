<script setup>
const { data: product } = await useFetch(`/api/products/${$route.params.slug}`);
</script>

<template>
  <p>{{ $route.params.slug }}</p>
</template>
