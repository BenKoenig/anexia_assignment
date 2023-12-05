<script setup>
const route = useRoute();
const { data: product } = await useFetch(`/api/products/${route.params.slug}`);

/**
 * Throws error if product is not found.
 */
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

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
  <Breadcrumbs :breadcrumbs="breadcrumbs" />
  <ProductDetail :product="product" />
</template>
