const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  hack: `true; @import "${path.resolve(
                    __dirname,
                    'src',
                    'shared',
                    'config',
                    'theme.less'
                  )}";`,
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@observagram': path.resolve(__dirname, 'src'),
      '@observagram-elements': path.resolve(__dirname, 'src/shared/components'),
      '@observagram-modules': path.resolve(__dirname, 'src/modules'),
      '@observagram-shared': path.resolve(__dirname, 'src/shared'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@mocks': path.resolve(__dirname, 'mocks'),
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Observsta',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    // new Dotenv(),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]/,
      new RegExp(
        `[/\\\\](${['en-GB', 'hi', 'de', 'it', 'es', 'fr'].join(
          '|'
        )})[/\\\\]index.js$`
      )
    ),
  ],
  optimization: {
    runtimeChunk: 'single',
    // NOTE: splits up the bundle into two:
    // one bundle contains the code we  write,
    // and the other contains all your dependencies
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use "contenthash" when hot reloading is enabled.
    config.output.filename = '[name].[fullhash].js';
  }

  return config;
};
