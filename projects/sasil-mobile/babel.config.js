module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './src/components',
            '@/template': './src/template',
            '@/screens': './src/screens',
            '@/logics': './src/logics',
            '@/constants': './src/constants',
          },
        },
      ],
    ],
  };
};
