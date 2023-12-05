export default defineNuxtConfig({
  devtools: { enabled: false },

  serverMiddleware: [
    { path: "/api/products", handler: "~/serverMiddleware/api.js" },
  ],

  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/product/**': { swr: true },
  },

  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@pinia/nuxt"],
})