module.exports = function(api) {
  api.cache(true);

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          // Adds specific imports for polyfills when they are used in each file.
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
    // For Jest
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      },
    },
  };

  return config;
};
