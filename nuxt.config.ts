export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  components: ["./components", "./sections"],
  app: {
    head: {
      title: "Nyronium Network | Landing",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})