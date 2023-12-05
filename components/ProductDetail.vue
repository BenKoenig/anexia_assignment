<!-- Product Detail component for the dynamic product detail pages -->
<script setup lang="ts">
/* Defining component properties with types and default values */
const props = defineProps({
  product: {
    type: Object /* Type of the property */,
  },
});
</script>

<template>
  <section class="flex flex-col" v-if="product">
    <div class="flex flex-col md:flex-row gap-x-5 py-8">
      <ProductCard :product="product" />
    </div>
  </section>
</template>
