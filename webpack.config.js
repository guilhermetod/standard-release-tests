const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'node16',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.json', '.ts', '.js', '.cjs', '.mjs'],
  },
  output: {
    iife: false,
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
