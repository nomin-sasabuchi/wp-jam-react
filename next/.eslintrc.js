module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  //サポートしたいJavaScript言語オプションを指定
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    //どの追加言語機能を使いたいかを示すオブジェクト
    ecmaFeatures: {
      jsx: true,
    },

    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    //関数とクラス メソッドで明示的な戻り型を要求する
    '@typescript-eslint/explicit-function-return-type': 0,
    //anyタイプの使用を許可しない
    '@typescript-eslint/no-explicit-any': 0,
    //空の関数を許可しない
    '@typescript-eslint/no-empty-function': 0,
    //React コンポーネント定義で欠落している props 検証を防止する
    'react/prop-types': 0,
    //JSX の使用時に React が欠落しないようにする
    'react/react-in-jsx-scope': 0,
    //空の関数を許可しない
    'no-empty-function': 0,
    //@ts-<directive>コメントの使用を禁止するか、ディレクティブの後に説明を要求する
    '@typescript-eslint/ban-ts-comment': 0,
  },
};

/*
ドキュメント
https://jtfal.com/docs/eslint/user-guide/configuring/

env = 静的検証の前提条件を設定
"browser": true = ブラウザで実行されるコードを静的検証する
"node": true = Node.js で実行されるコードを静的検証
"es6": true = ECMAScript 2015 (ES6) で書かれたコードを静的検証

"parserOptions": {
  "sourceType": "module"
}

extends = 既存の設定を流用して新しい設定を作り出す方法


plugins　= 特定のライブラリやフレームワーク、または実行環境に適用する

rules = プラグインのルール設定
各ルールは プラグイン名/ルール名 で指定します。

*/
