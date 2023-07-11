module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        },
        colors: {
          darkbg: "#1E1E1E",
          darkhd: "#171717",
          blue: {
            850: "#1e40af"
          }
        }
      },
    },
    plugins: [],
}