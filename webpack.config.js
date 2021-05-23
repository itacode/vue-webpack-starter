const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');

module.exports = (env, argv) => {
  let envParsed = {};
  let dotenvFile;
  const dotenvPlatformLocalFile = `.env.${env.platform}.local`;
  const dotenvPlatformFile = `.env.${env.platform}`;
  const dotenvDefaultFile = '.env';

  if (env.platform) {
    if (fs.existsSync(dotenvPlatformLocalFile)) {
      dotenvFile = dotenvPlatformLocalFile;
    } else if (fs.existsSync(dotenvPlatformFile)) {
      dotenvFile = dotenvPlatformFile;
    } else if (fs.existsSync(dotenvDefaultFile)) {
      dotenvFile = dotenvDefaultFile;
    }
  } else if (fs.existsSync(dotenvDefaultFile)) {
    dotenvFile = dotenvDefaultFile;
  }
  if (dotenvFile) {
    envParsed = dotenv.config({
      path: path.resolve(process.cwd(), dotenvFile),
    }).parsed;
  }

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
            process.env.NODE_ENV !== 'production'
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
    plugins: [
      new VueLoaderPlugin(),
      new ESLintPlugin({ extensions: ['js', 'vue'] }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(envParsed),
      }),
    ],
    devtool: 'source-map', // enum
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
        overlay: true,
      },
    },
  };

  if (process.env.NODE_ENV === 'development') {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      })
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
      })
    );
  }

  return config;
};
