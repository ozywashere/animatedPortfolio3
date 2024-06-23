/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#131424',
                secondary: '#393A47',
                accent: '#F13024',
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                site: 'url("/site-bg.svg")',
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            },
            keyframes: {
                spin: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(360deg)'},
                },
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, 'sans-serif'],
                sora: [`var(--font-sora)`, 'sans-serif'],
            },
        },
    },

    plugins: [require('tailwind-scrollbar')],
};
