module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'indent': 0
  },
};
