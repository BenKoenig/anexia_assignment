<!-- /*
 * Breadcrumbs.vue
 *
 * This component displays a list of breadcrumbs or links for navigation.
 * It receives an array of breadcrumb objects as props, each containing a text and a link.
 * Each breadcrumb is displayed as a link using the NuxtLink component.
 * The last breadcrumb in the list is highlighted with a different background color.
 */ -->

<script setup>
const props = defineProps(["breadcrumbs"]);
</script>

<template>
  <section>
    <div
      class="flex mt-4 gap-x-1 py-1.5 px-1.5 bg-white w-fit rounded-full text-black"
    >
      <div
        v-for="(breadcrumb, index) in props.breadcrumbs"
        class="last:bg-primary px-5 py-1.5 rounded-full border border-black hover:bg-dark-primary hover:text-white transition-colors"
      >
        <NuxtLink :to="breadcrumb.link" :key="index">{{
          breadcrumb.text
        }}</NuxtLink>
      </div>
    </div>
  </section>
</template>
