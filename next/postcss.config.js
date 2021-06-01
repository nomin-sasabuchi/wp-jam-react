module.exports = {
  plugins: {
    tailwindcss: {config: './tailwind.config.js'},
    autoprefixer: {},
    "postcss-import": {
      plugins: [
        // このタイミングでlinterを実行すると、エラー位置が結合前のファイルで示される
        require("stylelint")(),
      ],
    },
  },
}
