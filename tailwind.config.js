// eslint-disable-next-line import/no-extraneous-dependencies

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: "#0672CB",
        gray: {
          100: "#F5F6F7",
          200: "#F0F0F0"
        },
        error: "#E4424D",
        success: "#9BC438",
        warning: "#F5CD6F"
      },
    },
  },
};