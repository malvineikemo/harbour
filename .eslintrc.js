// .eslintrc.js
module.exports = {
    extends: [
      'next',
      'next/core-web-vitals', // Important for Next.js projects
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      // Other rules
      'react/react-in-jsx-scope': 'off', // Disable React in scope rule
      '@typescript-eslint/no-explicit-any': 'warn', // You can make this "warn" or "off" if you want to avoid errors
    },
    settings: {
      react: {
        version: 'detect', // Detect the React version
      },
    },
  };
  