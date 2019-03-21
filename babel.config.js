module.exports = function (api) {
  api.cache(true);

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  };

  return config;
};
