// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  }
})
