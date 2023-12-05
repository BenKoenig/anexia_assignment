<!-- /*
 * [slug].vue
 *
 * This component fetches and displays the details of a specific product.
 * The product data is fetched from an API using the product slug from the route params.
 * If the product is not found, a 404 error is thrown.
 * Breadcrumbs for the current page are also defined.
 */ -->

<script setup>
// Import the useRoute hook from Nuxt.js
const route = useRoute();

// Fetch the product data from the API using the product slug from the route params
const { data: product } = await useFetch(`/api/products/${route.params.slug}`);

/**
 * Throws error if product is not found.
 */
if (!product.value) {
  // If the product is not found, throw a 404 error
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

// Define the breadcrumbs for the current page
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