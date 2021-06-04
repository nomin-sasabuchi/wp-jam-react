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
    tailwindcss: { config: './tailwind.config.js' },
  },
};
