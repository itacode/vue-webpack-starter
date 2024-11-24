const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const getAppEnv = require('./env').getAppEnv;

module.exports = (env, argv) => {
  const config = {
    entry: {
      main: './src/app/main.ts',
    },
    output: {
      filename: 'js/app.[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: (file) =>
            /node_modules/.test(file) && !/\.vue\.js/.test(file),
        },
        {
          test: /\.(scss|css)$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false } },
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js', '.vue'],
    },
    plugins: [
      new VueLoaderPlugin(),
      new ESLintPlugin({
        extensions: ['js', 'vue', 'ts', 'tsx'],
        configType: 'flat',
      }),
    ],
    devtool: 'source-map',
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'src'),
          watch: argv.watch ? { ignored: ['**/*.scss'] } : false,
        },
      ],
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      client: {
        overlay: false,
      },
    },
  };

  if (process.env.NODE_ENV === 'development') {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    );
  }

  if (process.env.NODE_ENV === 'production') {
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
      }),
    );
  }

  let appEnv = getAppEnv({ platform: env.platform });
  if (config.output.publicPath) {
    appEnv.BASE_PATH = config.output.publicPath;
  }
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(appEnv),
    }),
  );

  return config;
};
