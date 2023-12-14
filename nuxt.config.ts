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
    "@pinia/nuxt",'@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: 'plugins/i18n.config.ts' ,
 }

});

//Steps Taken here to confiure the app
