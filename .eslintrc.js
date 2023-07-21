'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    // 'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'array-bracket-spacing': ["error", "always"],
    'arrow-spacing': ["error"],
    'block-spacing': ["error", "always"],
    'brace-style': ["error", "1tbs", { allowSingleLine: true }],
    'comma-spacing': ["error"],
    'curly': ["error", "multi-line"],
    'ember/no-controller-access-in-routes': ["error", { allowControllerFor: true }],
    'ember/no-get': "off", //this is off for now, until we are able to migrate to Octane
    'ember/no-incorrect-calls-with-inline-anonymous-functions': 'error',
    'ember/no-jquery': "off",
    'ember/require-computed-property-dependencies': "off",
    'func-style': ["error", "declaration", { allowArrowFunctions: true }],
    'indent': ["error", 2, {'SwitchCase': 1}],
    'keyword-spacing': ["error"],
    'object-curly-spacing': ["error", "always"],
    'quotes': ["error", "single", { allowTemplateLiterals: true, avoidEscape: true }],
    'semi-spacing': ["error"],
    'space-before-blocks': ["error", "always"],
    'space-before-function-paren': ["error", "never"],
    'space-in-parens': ["error", "never"],
    'template-curly-spacing': ["error", "never"]
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
