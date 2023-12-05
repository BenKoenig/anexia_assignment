<!-- /*
 * FullscreenImage.vue
 *
 * This component displays a selected image in fullscreen mode.
 * It receives the selected image source and product name as props.
 * The image can be closed by clicking on the background or the close button.
 * The component uses the NuxtImg component for better image performance.
 */ -->

<script setup>
// Define the props for the component
const props = defineProps(["selectedImage", "productName"]);

// Define the events that this component can emit
const emit = defineEmits(["update:selectedImage"]);

// Define a function to close the image
const closeImage = () => {
  // Emit an event to update the selected image
  emit("update:selectedImage", "");
};
</script>

<template>
  <!-- Display a fullscreen overlay when an image is selected -->
  <div
    class="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center px-4"
    v-if="selectedImage"
  >
    <!-- Add a button to close the image by clicking on the background -->
    <button
      @click="closeImage"
      class="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-lg cursor-default"
    >
      <span class="sr-only"
        >Exist fullscreen image by clicking in the background</span
      >
    </button>
    <!-- Display the selected image -->
    <div class="relative max-w-xl w-full">
      <!-- Add a close button -->
      <button
        type="button"
        class="absolute -top-1 right-0 bg-white py-2 px-4 rounded-full text-black -translate-y-full hover:bg-primary transition-colors"
        @click="closeImage"
      >
        Close
      </button>
      <!-- Use NuxtImg for better image performance -->
      <NuxtImg
        :src="selectedImage"
        :alt="productName"
        class="max-w-full max-h-full w-full rounded-2xl"
      />
    </div>
  </div>
</template>
