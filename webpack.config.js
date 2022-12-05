import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES = [
  {
    dir: "home",
    filename: "index"
  },
  {
    dir: "busguide",
    filename: "busguide"
  },
  {
    dir: "en-nevatrip",
    filename: "en-nevatrip"
  },
  {
    dir: "nevatrip-ru",
    filename: "nevatrip-ru"
  },
  {
    dir: "prahatrip-cz",
    filename: "prahatrip-cz"
  },
  {
    dir: "ru-prahatrip-cz",
    filename: "ru-prahatrip-cz"
  },
  {
    dir: "ru-thaibuytrip",
    filename: "ru-thaibuytrip"
  },
];

const config = {
  entry: {
    main: './src/scss/main.scss',
    index: './src/pages/home/index.js',
    busguide: './src/pages/busguide/index.js',
    "en-nevatrip": './src/pages/en-nevatrip/index.js',
    "nevatrip-ru": './src/pages/nevatrip-ru/index.js',
    "ru-prahatrip-cz": './src/pages/ru-prahatrip-cz/index.js',
    "prahatrip-cz": './src/pages/prahatrip-cz/index.js',
    "ru-thaibuytrip": './src/pages/ru-thaibuytrip/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    watchFiles: ['**/*.html', '**/*.hbs'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            inlineRequires: '/icons/',
          },
        },
      },
      {
        test: /main\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
        exclude: [/main\.scss$/],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',

        parser: {
          dataUrlCondition: (source, { filename, module }) => {
            return filename.includes('system');
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },

  plugins: [
    ...PAGES.map(({ dir, filename }) => new HtmlWebpackPlugin({
      template: `./src/pages/${dir}/${filename}.hbs`,
      filename: `./${filename}.html`,
      chunks: ['main', dir],
      inject: true,
    })),


    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};

export default (env, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = '[name].js';
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[contenthash].js';
  }

  return config;
};
