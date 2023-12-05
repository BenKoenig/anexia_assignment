<!-- /*
 * ProductDetail.vue
 *
 * This component displays the details of a specific product on its detail page.
 * It receives a product object as a prop and displays its details using the ProductCard component.
 * It also provides a feature to view the product images in fullscreen mode using the FullscreenImage component.
 * The selected image for fullscreen view can be changed by clicking on the images in the grid layout.
 */ -->

<script setup lang="ts">
/* Defining component properties with types and default values */
const props = defineProps({
  product: {
    type: Object /* Type of the property */,
  },
});

const selectedImage = ref("");
const selectImage = (img: string) => {
  selectedImage.value = img as string;
};
</script>

<template>
  <!-- FullscreenImage component displays the selected image in fullscreen mode -->
  <FullscreenImage
    :selectedImage="selectedImage"
    :productName="product ? product.name : ''"
    @update:selectedImage="selectedImage = $event"
  />
  <!-- The section is only rendered if the product data is available -->
  <section class="flex flex-col" v-if="product">
    <div class="flex flex-col md:flex-row gap-x-5 py-8">
      <!-- ProductCard component displays the product details -->
      <ProductCard :product="product">
        <h2 class="mt-4 font-bold text-2xl">More Images</h2>
        <!-- Grid layout for displaying multiple images -->
        <div class="grid grid-cols-3 gap-x-2 mt-2">
          <!-- Loop through the product images -->
          <div v-for="(img, index) in product.imgs" class="relative w-full">
            <div :key="index">
              <!-- Button to select an image for fullscreen view -->
              <button
                type="button"
                class="absolute top-0 left-0 w-full h-full"
                @click="selectImage(img)"
              >
                <span class="sr-only">View fullscreen</span>
              </button>
              <!-- NuxtImg component for better image performance -->
              <NuxtImg
                :src="img"
                :alt="product.name"
                class="aspect-square w-full object-cover rounded-2xl h-fit"
              />
            </div>
          </div>
        </div>
      </ProductCard>
    </div>
  </section>
</template>
