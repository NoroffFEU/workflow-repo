// eslint.config.mjs  (Moodle version)
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // test globals (used later in the module)
        describe: true,
        test: true,
        it: true,
        expect: true,
        // node-style globals for config files / env
        require: true,
        module: true,
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
