// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'purple': {
                    light: '#A37AD8',
                    light70: 'rgba(99, 61, 206, .6)',
                    medium: '#633DCE',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
