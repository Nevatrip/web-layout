import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';
import svgToTinyDataUri from 'mini-svg-data-uri';
import SVGSpriteLoaderPlugin from 'svg-sprite-loader/plugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES = [
  {
    dir: 'home',
    filename: 'index',
  },
  {
    dir: 'busguide',
    filename: 'busguide',
  },
  {
    dir: 'en-nevatrip',
    filename: 'en-nevatrip',
  },
  {
    dir: 'nevatrip-ru',
    filename: 'nevatrip-ru',
  },
  {
    dir: 'excursion',
    filename: 'excursion',
  },
  {
    dir: 'prahatrip-cz',
    filename: 'prahatrip-cz',
  },
  {
    dir: 'ru-prahatrip-cz',
    filename: 'ru-prahatrip-cz',
  },
  {
    dir: 'ru-thaibuytrip',
    filename: 'ru-thaibuytrip',
  },
  {
    dir: 'trip-icons',
    filename: 'trip-icons',
  },
  {
    dir: 'faq',
    filename: 'faq',
  },
  {
    dir: 'list',
    filename: 'list',
  },
  {
    dir: 'list-map',
    filename: 'list-map',
  },
  {
    dir: 'group',
    filename: 'group',
  },
  {
    dir: 'arenda-main',
    filename: 'arenda-main',
  },
  {
    dir: 'arenda-list',
    filename: 'arenda-list',
  },
  {
    dir: 'vlog-main',
    filename: 'vlog-main',
  },
  {
    dir: 'vlog-inner-page',
    filename: 'vlog-inner-page',
  },
  {
    dir: 'blog',
    filename: 'blog',
  },
  {
    dir: 'blog-inner',
    filename: 'blog-inner',
  },
  {
    dir: 'blog-detail-old',
    filename: 'blog-detail-old',
  },
  {
    dir: 'sights-list',
    filename: 'sights-list',
  },
  {
    dir: 'sight',
    filename: 'sight',
  },
];

const config = {
  entry: {
    main: './src/scss/main.scss',
    ...PAGES?.reduce((acc, { dir }) => {
      acc = { ...acc, [dir]: `./src/pages/${dir}/index.js` };
      return acc;
    }, {}),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    hot: true,
    watchFiles: ['**/*.html', '**/*.hbs'],
  },
  optimization: {},
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
            inlineRequires: '/icons|images/',
            partialDirs: [path.join(__dirname, 'src', 'chunks')],
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
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        exclude: [/\.sprite\.svg$/, /flags/],
        type: 'asset',
        parser: {
          dataUrlCondition: (source, { filename, module }) => {
            return filename.includes('system');
          },
        },
        generator: {
          filename: 'assets/icons/[name][ext]',
          dataUrl: content => {
            content = content.toString();
            return svgToTinyDataUri(content);
          },
        },
      },
      {
        test: /\.sprite\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          outputPath: 'assets/sprites/',
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/flags'),
        type: 'asset/resource',
        generator: {
          filename: name => {
            const path = name.filename.split('/').slice(1, -1).join('/');
            return `assets/${path}/[name][ext]`;
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    ...PAGES.map(
      ({ dir, filename }) =>
        new HtmlWebpackPlugin({
          template: `./src/pages/${dir}/${filename}.hbs`,
          filename: `./${filename}.html`,
          chunks: ['main', dir],
          minify: {
            collapseWhitespace: false,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
        })
    ),

    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new SVGSpriteLoaderPlugin(),
  ],
};

export default (env, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = '[name].js';
    config.devtool = 'source-map';
    config.optimization.runtimeChunk = 'single';
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[contenthash].js';
    config.output.clean = true;
  }

  return config;
};
