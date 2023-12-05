<!-- 
This component handles pagination for products. 

Features include -
* setting items per page and navigating between pages. 
* It emits events on page changes for reactive updates. 
-->

<template>
  <div class="flex justify-center gap-x-3 mb-5">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button
      v-for="page in pagesToShow"
      :key="page"
      @click="setCurrentPage(page)"
      :class="{ 'text-secondary': currentPage === page }"
    >
      {{ page }}
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
/* Importing necessary functions from Vue */
import { ref, computed, defineProps, defineEmits } from "vue";

/* Defining component properties with types and default values */
const props = defineProps({
  itemsPerPage: {
    type: Number /* Type of the property */,
    default: 10 /* Default value if not provided */,
  },
  totalItems: {
    type: Number /* Type of the property */,
    default: 100 /* Default value if not provided */,
  },
  page: {
    type: Number /* Type of the property */,
    default: 1 /* Default value if not provided */,
  },
});

/* Reference to track the current page */
const currentPage = ref(props.page);

/* Computed property to calculate the total number of pages */
const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);

/* Computed property to determine which pages to show in the pagination */
const pagesToShow = computed(() => {
  const startPage = Math.max(currentPage.value - 4, 1);
  const endPage = Math.min(startPage + 8, totalPages.value);
  /* Creating an array of page numbers to display */
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

/* Define custom event emitters */
const emit = defineEmits(["update:page"]);

/* Function to set the current page and emit an update event */
const setCurrentPage = (page) => {
  currentPage.value = page;
  emit("update:page", page);
};

/* Function to navigate to the next page */
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit("update:page", currentPage.value);
  }
};

/* Function to navigate to the previous page */
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:page", currentPage.value);
  }
};
</script>
