<template>
  <div class="fixed h-20 top-0 left-0 w-full flex items-center pl-6 mb-10 backdrop-blur-lg">
    <h1 class="text-white text-4xl font-bold">Online Shop</h1>
  </div>
  <div class="px-4">
    <slot />
  </div>
</template>

<style>
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
