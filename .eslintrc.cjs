/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  "rules": {
    "vue/multi-word-component-names": "off",
    "vue/no-unused-components": ["warn"],
    "vue/prop-name-casing": "off",
    "semi": ["error", "always"],
    "no-new": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "tabWidth": 4,
        "printWidth": 140,
        "semicolons": true,
        "semi": true,
        "endOfLine": "auto",
        "bracketSpacing": true,
        "indent": "off",
        "trailingComma": "all"
      }
    ],
    "quotes": ["error", "single"]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
