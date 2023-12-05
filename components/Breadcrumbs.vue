<!-- This component displays all of the breadcrumbs / links -->
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
        <NuxtLink :to="breadcrumb.link" class="">{{
          breadcrumb.text
        }}</NuxtLink>
      </div>
    </div>
  </section>
</template>
