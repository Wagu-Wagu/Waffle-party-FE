/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        title: ["2rem", "2.8rem"],
        subtitle: ["1.6rem", "2.4rem"],
        body: ["1.4rem", "2.2rem"],
        button: ["1.6rem", "2rem"],
        caption: ["1.2rem", "1.6rem"],
        d1: ["4rem", "4.8rem"],
        d2: ["3.2rem", "4.0rem"],
        d3: ["2.8rem", "3.6rem"],
        d4: ["2.4rem", "3.2rem"],
        d5: ["2rem", "2.8rem"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        textCustom: "#171719",
      },
    },
  },
  plugins: [],
};
