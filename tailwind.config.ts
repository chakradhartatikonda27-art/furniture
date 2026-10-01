import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hyper: {
          black: "#111111",
          white: "#FFFFFF",
          gray: {
            50: "#FAFAFA",
            100: "#F5F5F7",
            200: "#E5E5E7",
            300: "#D1D1D6",
            400: "#9E9E9E",
            600: "#6E6E73",
            800: "#333333",
            900: "#1D1D1F",
          },
          blue: {
            royal: "#0F172A",
            bright: "#2563EB",
            light: "#EFF6FF",
            soft: "#E0F2FE",
          },
          red: {
            sale: "#DC2626",
            accent: "#EF4444",
          },
          yellow: {
            badge: "#FACC15",
            bg: "#FEFCE8",
          },
          green: {
            new: "#16A34A",
          },
          lavender: "#F0F4FF",
          pastel: {
            beige: "#FBF7F4",
            blue: "#F0F5FA",
            green: "#F2F7F4",
            pink: "#FAF3F5",
          }
        },
      },
      fontSize: {
        'nav': ['16px', { lineHeight: '22px' }],
        'card-title': ['24px', { lineHeight: '30px' }],
        'section-heading': ['48px', { lineHeight: '56px' }],
        'hero-heading': ['72px', { lineHeight: '80px' }],
      },
      borderRadius: {
        'hyper': '16px',
        'hyper-lg': '24px',
        'hyper-xl': '32px',
      },
      boxShadow: {
        'hyper-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hyper-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08)',
        'hyper-card': '0 2px 10px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
