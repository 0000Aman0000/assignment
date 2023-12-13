// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  devtools: { enabled: true },
  css: ["~/dist/output.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  $development: {},
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },

  modules: [
    // ...
    "@pinia/nuxt",
  ],
});

//Steps Taken here to confiure the app
