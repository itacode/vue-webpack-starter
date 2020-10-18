const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    entry: {
      main: './src/app/main.js',
    },
    output: {
      filename: 'js/app.[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: (file) =>
            /node_modules/.test(file) && !/\.vue\.js/.test(file),
        },
        {
          test: /\.(scss|css)$/,
          use: [
            argv.mode !== 'production'
              ? 'vue-style-loader'
              : {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // needed after upgrade to css-loader 4.0.0 (default is true)
                    esModule: false,
                  },
                },
            {
              loader: 'css-loader',
              options: {
                // needed after upgrade to css-loader 4.0.0 (default is true)
                esModule: false,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "@/css/prepends";',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [new VueLoaderPlugin()],
    devtool: 'source-map', // enum
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      // When starting server via the CLI with --watch-content-base
      watchOptions: {
        ignored: ['**/*.scss'],
      },
      hot: true,
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      stats: 'minimal',
      overlay: true,
    },
  };

  if (argv.mode === 'development') {
    // TODO: remove this patch when problem will be fixed
    // Patch to fix broken hot reloading problem.
    // https://github.com/webpack/webpack-dev-server/issues/2758
    config.target = 'web';

    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      })
    );
  }

  if (argv.mode === 'production') {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/app.[name].bundle.css',
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'src',
            globOptions: {
              ignore: ['**/app/**', '**/*.scss', '**/index.html'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      })
    );
  }

  return config;
};
