import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "client/dist", "client/node_modules"]),
  {
    files: ["src/**/*.{js,jsx}", "*.config.js", "vite.config.js"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z_]|^motion$|^set[A-Z]",
          argsIgnorePattern: "^[A-Z_]|^_|^value$|^onValueChange$",
        },
      ],
    },
  },
  {
    files: ["src/features/**/*.{js,jsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@/app/*"],
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{js,jsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@/app/*", "@/features/*", "@/entities/*", "@/widgets/*"],
        },
      ],
    },
  },
]);
