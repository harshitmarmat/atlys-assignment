/** @type {import('tailwindcss').Config} */

const atlys_color_theme = {
  gray: "#7F8084",
  lightgray: "#6B6C70",
  mediumgray: "#C5C7CA",
  gray: "#7F8084",
  darkgray: "#27292D",
  bordergray: "#35373B",
  black: "#131319",
  lightblack: "#191920",
  white: "#FFFFFF",
  blue: "#4A96FF",
  gradient_from_gray : "#969696",
  gradient_to_gray:"#343434"
};


const atlys_typography_theme = {
  DB1: [
    "14px",
    {
      lineHeight: "18px",
      fontWeight: "500",
    },
  ],
  DT1: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: "400",
    },
  ],
  DT2 :[
    "16px",
    {
      lineHeight : '20px',
      fontWeight : '500'
    }
  ],
  DH1 : [
    "18px",
    {
      lineHeight : '20px',
      fontWeight : "600"
    }
  ]
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      colors: atlys_color_theme,
      fontSize: atlys_typography_theme,
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
