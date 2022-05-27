module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4e4eff",
          // secondary: "#ffa500",
          secondary: "#4e4eff",
          accent: "#ff6347",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          error: "red",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
