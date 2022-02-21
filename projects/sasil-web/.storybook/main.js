const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/template': path.resolve(__dirname, '../src/template'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/logics': path.resolve(__dirname, '../src/logics'),
      '@/constants': path.resolve(__dirname, '../src/constants'),
    };

    return config;
  },
};
