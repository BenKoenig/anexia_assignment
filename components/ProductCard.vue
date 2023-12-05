<!-- This component displays product image, name, price and description for individual products -->

<script setup lang="ts">
import { formatPrice } from "../helpers";
const props = defineProps(["product"]);
</script>

<template>
  <NuxtImg
    :src="product.thumbnail"
    alt="product.name"
    class="aspect-square ml-2 w-32 object-cover rounded-2xl h-fit outline outline-primary outline-offset-4 outline-1 mt-2 ml-0.5"
  />
  <div class="w-full mt-4 md:mt-0">
    <div class="flex items-center gap-x-3">
      <h3 class="text-primary font-bold text-2xl">{{ product.name }}</h3>
      <!-- dot -->
      <div class="bg-white w-1.5 h-1.5 rounded-full"></div>
      <p>${{ formatPrice(product.price) }}</p>
    </div>
    <p class="bg-dark-primary text-lg mt-2 w-fit rounded-xl px-6 py-5">
      {{ product.desc }}
    </p>

    <slot />
  </div>
</template>
