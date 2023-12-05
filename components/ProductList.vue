<!-- /*
 * ProductList.vue
 *
 * This component displays a list of products on the Home page.
 * Each product is displayed using the ProductCard component.
 * The list of products is passed as a prop to the component.
 * Each product has a 'View Product' link that navigates to the product's detail page.
 */ -->

<script setup lang="ts">
// Define the props for the component
const props = defineProps(["products"]);
</script>

<template>
  <!-- Section for displaying the list of products -->
  <section class="flex flex-col">
    <!-- Loop through the products -->
    <div
      v-for="(product, index) in props.products"
      :key="index"
      class="flex flex-col md:flex-row gap-x-5 py-8 border-b border-white/50 last:border-b-transparent"
    >
      <!-- ProductCard component displays the product details -->
      <ProductCard :product="product">
        <!-- NuxtLink component for navigation -->
        <NuxtLink
          class="inline-block mt-2 bg-white text-black font-black uppercase px-7 py-3 rounded-full mt-4 hover:bg-primary transition-colors"
          :to="`/product/${product.slug}`"
          >View Product</NuxtLink
        >
      </ProductCard>
    </div>
  </section>
</template>
