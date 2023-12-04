export default defineNuxtConfig({
  devtools: { enabled: false },

  serverMiddleware: [
    { path: "/api/products", handler: "~/serverMiddleware/api.js" },
  ],

  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  },

  modules: ['@nuxtjs/tailwindcss'],
})