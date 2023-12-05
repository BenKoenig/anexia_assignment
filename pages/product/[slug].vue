<!-- /*
 * [slug].vue
 *
 * This component fetches and displays the details of a specific product.
 * The product data is fetched from an API using the product slug from the route params.
 * If the product is not found, a 404 error is thrown.
 * Breadcrumbs for the current page are also defined.
 */ -->

<script setup>
import { useRoute } from "vue-router";
import { useFetch, createError } from "nuxt/app";
import { useProductStore } from "~/stores/product";

const route = useRoute();
const productStore = useProductStore();

const { data: product } = await useFetch(`/api/products/${route.params.slug}`);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

// Update the product name in the store
productStore.updateProductName(product.value.name);

const breadcrumbs = [
  {
    text: "Products",
    link: "/",
  },
  {
    text: product.value.name,
    link: `/product/${product.value.slug}`,
  },
];
</script>

<template>
  <!-- Display the breadcrumbs at the top of the page -->
  <Breadcrumbs :breadcrumbs="breadcrumbs" />
  <!-- Display the product details -->
  <ProductDetail :product="product" />
</template>
