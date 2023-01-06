/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                hotpink: '#e3bfd4',
            },
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: 0,
                    },
                },
                'rotate-forever': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 1s ease',
                'fade-out': 'fade-out 1s ease',
                'rotate-infinite': 'rotate-forever 2s linear infinite',
            },
            fontFamily: {
                monoc: ['Monocraft', 'monospace'],
            },
        },
    },
    plugins: [],
};
