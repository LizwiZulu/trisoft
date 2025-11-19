/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
            backgroundImage: {
                "grid-white": "url('data:image/svg+xml,%3csvg xmlns=…%3e')", // copy your long data URI
            },
            colors: {
                background: "#030014",
                surface: "#0f0c29",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'blob-delay': 'blob 7s infinite 2s',
                'scroll': 'scroll 40s linear infinite',
                'spin-slow': 'spin 15s linear infinite',
                'spin-reverse-slow': 'spin-reverse 15s linear infinite',
                'orbit': 'orbit 20s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'spin-reverse': {
                    'to': { transform: 'rotate(-360deg)' }
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
                }
            },
        },
    },
    plugins: [],
};
