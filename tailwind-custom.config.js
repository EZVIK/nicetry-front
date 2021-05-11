module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
      },


    },
    variants: {
      extend: {},
    },
  plugins: [require("nightwind")],
  fastRefresh: {}
};
