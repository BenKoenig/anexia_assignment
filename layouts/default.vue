<!-- default layout for every page (if none other is selected) -->

<template>
  <div class="default-min-height">
    <!-- nav // no seperate component to reduce redundancy -->
    <nav
      class="fixed h-20 top-0 left-0 w-full flex items-center pl-4 mb-10 backdrop-blur-lg"
    >
      <NuxtLink to="/" class="text-white text-4xl font-bold"
        >Online Shop</NuxtLink
      >
    </nav>
    <!-- wraps around all components -->
    <div class="flex justify-center px-4">
      <div class="w-full max-w-4xl">
        <!-- child components go here -->
        <slot />
      </div>
    </div>
  </div>
  <!-- footer // no seperate component to reduce redundancy -->
  <footer class="flex items-center justify-center h-12 bg-dark-primary mt-10">
    <!-- non functional demo links -->
    <ul class="flex gap-x-2">
      <li><NuxtLink to="/" class="hover:text-primary">Imprint</NuxtLink></li>
      <li><NuxtLink to="/" class="hover:text-primary">Cookies</NuxtLink></li>
      <li><NuxtLink to="/" class="hover:text-primary">Privacy</NuxtLink></li>
    </ul>
  </footer>
</template>

<style>
.default-min-height {
  min-height: calc(100vh - 168px);
}

@font-face {
  font-family: "ClashDisplay";
  src: url("/assets/fonts/ClashDisplay-Variable.woff2") format("woff2"),
    url("/assets/fonts/ClashDisplay-Variable.woff") format("woff"),
    url("/assets/fonts/ClashDisplay-Variable.ttf") format("truetype"),
    url("/assets/fonts/ClashDisplay-Variable.eot") format("embedded-opentype");
  font-weight: 100 900;
  font-style: normal;
}
body {
  @apply font-ClashDisplay text-white bg-dark-secondary mt-20;
}
</style>
