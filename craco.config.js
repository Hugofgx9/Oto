const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');

module.exports = {
  // ...
  webpack: {
      alias: {
          '@src': path.join(path.resolve(__dirname, './src')),
          '@components': path.join(path.resolve(__dirname, './src/Components')),
          '@pages': path.join(path.resolve(__dirname, './src/Pages')),
      }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/theme/_init.scss',
      },
    },
  ],
};