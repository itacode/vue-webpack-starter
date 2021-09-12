module.exports = function (api) {
  api.cache(true);

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: 'auto',
          // Adds specific imports for polyfills when they are used in each file.
          useBuiltIns: 'usage',
          corejs: 3.17,
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  };

  return config;
};
