const path = require('path');

const groupKind = 'argoproj.io/ApplicationSet';

const config = {
  entry: {
    extension: './src/index.tsx',
  },
  output: {
    filename: 'extensions.js',
    path: __dirname + `/dist/resources/${groupKind}/ui`,
    library: {
      name: ['extensions', 'resources', groupKind],
      type: 'window'
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.ttf', '.scss'],
  },
  externals: {
    react: 'React',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true,
          configFile: path.resolve('./src/tsconfig.json')
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'raw-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'raw-loader'],
      },
    ],
  },
  mode: "production",
};

module.exports = config;