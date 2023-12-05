<script setup lang="ts">
import { ref, computed } from "vue";

/* for pagination */
const currentPage = ref(2);
const itemsPerPage = 4;

/* api fetch */
const { data: allProducts } = await useFetch(`/api/products`);

/**
 * This is a computed property that returns the products for the current page.
 * It calculates the start and end indices for the slice operation based on the current page and the number of items per page.
 * If `allProducts` is null, it returns an empty array.
 * Otherwise, it returns a slice of `allProducts` from `start` to `end`.
 *
 * ===== NOTE =====
 * The more efficient way would be to limit the number of products returned from the API.
 * That way not all products would be loaded at once.
 * However for this exercise, we'll keep it simple.
 */
const products = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  if (allProducts.value === null) {
    return [];
  }

  return allProducts.value.slice(start, end);
});
</script>

<template>
  <ProductList :products="products" />
  <Pagination
    v-model:page="currentPage"
    :items-per-page="itemsPerPage"
    :total-items="allProducts.length"
  />
</template>
