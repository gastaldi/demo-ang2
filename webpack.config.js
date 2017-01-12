module.exports = {
  entry: {
    index: "./src/main/javascript/main.ts"
  },
  output: {
    path: "./target/demo-ang2/assets/",
    filename: "[name].js"
  },
  resolve: {
    extensions: [
      "", ".js", ".ts"
    ],
    modulesDirectories: [
      "node_modules",
      "src/main/javascript"
    ]
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  },
  devServer: {
    publicPath: "/assets/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
