// eslint 配置规范文档 地址 https://eslint.org/docs/user-guide/configuring
// rules 规则 0 表示关闭, 1 表示警告, 2 表示错误
// 示例 max-len: ['error', 120] 表示最大列数为120, 超过出现错误

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    camelcase: 0, // 允许 下划线api
    'react/require-default-props': 0, // 不对 defaultProps 做强制要求  因为现在都是function组件 直接使用可选参数处理这个问题
    'react/prop-types': 0, // 使用ts 不需要 prop-types 定义类型;
    'max-len': ['error', 120], // 最大列数不得超过120
    'max-lines': ['error', 300], // 最大行数不得超过300
    'global-require': 0,
    'no-console': 0,
    'linebreak-style': 0, // 忽略换行符 -> git 导致的问题, 不好解决
    'react/jsx-props-no-spreading': 0, // 允许props 透传
    'react/jsx-filename-extension': [ // 允许在['.js', '.jsx', '.tsx'] 文件中 写 jsx 代码
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 0, // 允许 import 时 不带文件后缀名
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0, // 可以引用devDependencies包
    '@typescript-eslint/no-var-requires': 0,
    'no-param-reassign': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0, // 允许没有默认导出
    'react/no-unstable-nested-components': 0,
    'jsx-a11y/click-events-have-key-events': 0, // 键盘事件不是必须的
    'no-underscore-dangle': 0, // 允许使用 __开头命名  (非特殊不能这样命名)
  },

  // 对某些特定的文件进行单独配置
  overrides: [
    {
      files: ['*.ts', '**/sht-svg/*.tsx'],
      rules: {
        'max-lines': 0,
        'max-len': 0,
      },
    },
  ],
  settings: {
    'import/extensions': [
      '.ts',
      '.tsx',
    ],
  },
  globals: {
    document: false,
  },
};
