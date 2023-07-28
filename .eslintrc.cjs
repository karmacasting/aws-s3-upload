/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:eslint-comments/recommended", "plugin:import/recommended", "plugin:import/typescript"],
  ignorePatterns: ["dist", "lib", "node_modules", "!.prettierrc.js", "!.sortierrc.js"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        "plugin:security/recommended",
      ],
      files: ["*.ts", "*.js", "*.mjs"],
      rules: {
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-use-before-define": "warn",
        "consistent-this": "warn", // enforces consistent naming when capturing the current execution context (off by default)
        "dot-notation": "warn",
        "eslint-comments/disable-enable-pair": "off",
        "eslint-comments/no-unused-disable": "warn", // disallow disables that don't cover any errors
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "import/first": "warn",
        "import/newline-after-import": "warn",
        "new-cap": ["error", { capIsNew: false, newIsCap: true }],
        "new-parens": "warn",
        "no-alert": "warn", // disallow the use of alert, confirm, and prompt
        "no-array-constructor": "warn", // disallow use of the Array constructor
        "no-catch-shadow": "warn", // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-duplicate-imports": "error",
        "no-mixed-requires": "warn", // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
        "no-nested-ternary": "warn",
        "no-new": "warn", // disallow use of new operator when not part of the assignment or comparison
        "no-new-require": "warn", // disallow use of new operator with the require function (off by default) (on by default in the node environment)
        "no-path-concat": "warn", // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
        "no-proto": "warn", // disallow usage of __proto__ property
        "no-return-assign": "warn", // disallow use of assignment in return statement
        "no-unneeded-ternary": "warn",
        "no-unreachable": "warn",
        "no-void": "warn", // disallow use of void operator (off by default)
        "one-var": ["warn", "never"],
        "prefer-template": "warn",
        radix: "error", // require use of the second argument for parseInt() (off by default)
        "security/detect-non-literal-fs-filename": "off",
        "security/detect-object-injection": "off",
        yoda: "warn",
      },
    },
    {
      // Test rules
      files: ["*.spec.ts", "*.spec.tsx", "*.test.ts", "*.test.tsx"],
      rules: {},
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      node: true,
      typescript: true
    },
    node: {
      // node/no-missing-import needs this when using relative imports
      tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
    },
  },
}
