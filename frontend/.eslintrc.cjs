module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "plugins": ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-console": "off"
  },
  "settings": {
    "react": { "version": "detect" }
  }
}