import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/css/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/css/_variables.scss";`
                },
            },
        },
    },
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
