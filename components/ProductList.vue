<script setup lang="ts">
const props = defineProps(["products"]);

const formatPrice = (price: number) => new Intl.NumberFormat().format(price);
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-full max-w-4xl">
      <div
        v-for="(product, index) in props.products"
        :key="index"
        class="flex flex-col md:flex-row gap-x-5 py-8 border-b border-white/50 last:border-b-transparent"
      >
        <img
          :src="product.img"
          alt="product.name"
          class="aspect-square w-32 object-cover rounded-2xl h-fit outline outline-primary outline-offset-4 outline-1 mt-2 ml-0.5"
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
        </div>
      </div>
    </div>
  </div>
</template>
