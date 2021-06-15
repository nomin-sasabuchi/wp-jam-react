module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import':{},
    'postcss-preset-env': {
      stage: 2,
      features: {
        autoprefixer: true,
      },
    },
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-math': {},
    tailwindcss: { config: './tailwind.config.js' },
  },
};
