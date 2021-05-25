// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration

module.exports = {
  // A map from regular expressions to paths to transformers
  transform: {
    // process `*.vue` files with `vue-jest`
    '^.+\\.vue$': 'vue-jest',
    // process js with `babel-jest`
    '^.+\\.js$': 'babel-jest',
  },
  // From jest 27 it defaults to node.
  // Jsdom is for a browser environment.
  testEnvironment: 'jsdom',
};
