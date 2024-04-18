const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "prettier",
    "react-hooks",
    "react-refresh",
  ],
  rules: {
    "no-console": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: {
          order: "asc",
        },
        pathGroups: [
          {
            pattern: "./**/*.scss",
            group: "sibling",
            position: "after",
          },
        ],
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        ".scss",
        ".svg",
        ".png",
        ".jpg",
      ],
    },
    "import/resolver": {
      typescript: {
        project: path.resolve("./tsconfig.json"),
      },
    },
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    react: {
      version: "detect",
    },
  },
};
