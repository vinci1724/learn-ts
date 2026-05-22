import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    quotes: 'single',
  },

  rules: {
    'no-console': ['off'],
    'antfu/top-level-function': 'off',
  },
});
