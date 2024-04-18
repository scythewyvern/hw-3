export default {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 90,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: ["**.*.scss", "*.scss"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
