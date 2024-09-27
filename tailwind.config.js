/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        white: {
          100: "#ffffff",
          200: "#e8e8e8",
          300: "#b5b5b5",
          400: "#8c8c8c",
          500: "#6b6b6b"
        },
        black: {
          50: "#e6e6e6",
          100: "#b0b0b0",
          200: "#8a8a8a",
          300: "#545454",
          400: "#333333",
          500: "#000000"
        },
        danger: {
          100: "#eebfc1",
          200: "#e5a0a3",
          300: "#d97478",
          400: "#d2595e",
          500: "#c73036"
        },
        warning: {
          100: "#ffedca",
          200: "#ffe5b0",
          300: "#ffd98c",
          400: "#ffd176",
          500: "#ffc654"
        },
        success: {
          100: "#b9ec2d",
          200: "#97d5b5",
          300: "#67c194",
          400: "#49b57f",
          500: "#1ca35f"
        },
        info: {
          100: "#c3daf2",
          200: "#a5c9ec",
          300: "#7cb0e4",
          400: "#63a1de",
          500: "#3c89d6"
        },
        darkSlateBlue: {
          100: "#2f267d",
          200: "#3d348b",
          300: "#594fad",
          400: "#7a71c3",
          500: "#9d96d9"
        },
        selectiveYellow: {
          100: "#f7b801",
          200: "#ebb518",
          300: "#e7b626",
          400: "#f0c74f",
          500: "#f2ce65"
        },
        goldDrop: {
          100: "#f18701",
          200: "#EE8B0F",
          300: "#F19725",
          400: "#f7a946",
          500: "#fbb760"
        },
        brightOrange: {
          100: "#f35b04",
          200: "#f36310",
          300: "#f4742b",
          400: "#ef8346",
          500: "#ff9c65"
        }
      },
      fontFamily: {
        monsterrat: ["Montserrat", "sans-serif"]
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem"
        },
        borderRadius: {
          "4xl": "2rem"
        }
      }
    }
  },
  plugins: []
};
