import path from 'path'
import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: process.argv.includes('generate') ?'static' :'server',
  buildModules: [
    ["@pinia/nuxt", { disableVuex: true }]
  ],
  css: ["~/styles/main.sass", "~/styles/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
