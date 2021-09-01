const plugin = require('tailwindcss/plugin');

console.log('Tailwind Running !');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  //themeではあらゆる値を定義
  theme: {
    colors: {
      black: {
        DEFAULT: '#333333',
      },
      gray: {
        DEFAULT: '#eeeeee',
      },
      navy: {
        DEFAULT: '#181731',
      },
      yellow: {
        DEFAULT: '#ffa800',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      red:{
        DEFAULT: '#ff7676',
      },
      transparent: 'transparent',
    },
    screens: {
      pc: '769px',
    },
    fontFamily: {
      'yu-gothic': `'游ゴシック体', YuGothic, '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif`,
      'yu-mincho': `'游明朝体', 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'ヒラギノ明朝 ProN', 'MS PMincho', 'MS 明朝',sans-serif`,
    },
    //既存のテーマを拡張したい場合は、extendを使用(themeに記述すると既定値を上書きしてしまう)
    extends: {},
  },
  //レスポンシブなクラスや、擬似クラスを用いたクラスがビルド時に生成されるが、これらのクラスを生成するかどうかコントロールする
  variants: {
    extend: {},
  },
  //CSSの代わりにJavaScriptを使用して、新しいスタイルを挿入できる
  plugins: [
  ],
  corePlugins: {
    container: false,
  },
};
