const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  entry: {
    main: './src/app/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/js/',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devtool: "source-map", // enum
  devServer: {
    contentBase: 'src',
    hot: true,
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true,
    stats: "errors-only",
    overlay: true,
  },
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([{
        from: 'src/',
        to: path.resolve(__dirname, 'dist/'),
        ignore: ['app/**/*', 'css/**/*.scss'],
      }]));
  }

  return config;
};
