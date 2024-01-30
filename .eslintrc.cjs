module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js", "postcss.config.js", "src/components/ui/**"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@tanstack/query/stable-query-client": "error",
    "react/function-component-definition": ["warn", { namedComponents: "function-declaration" }],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/display-name": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        // Specify PascalCase for React components
        selector: "variable",
        format: ["PascalCase", "camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically includes the React version
    },
  },
};
