module.exports = {
  entry: "./frontend/bench_bnb.jsx",
  output: {
    path: "app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
