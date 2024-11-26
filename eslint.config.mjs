import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    "rules": {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    }
  }
];
