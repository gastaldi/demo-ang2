module.exports = {
  entry: {
    index: "./src/main/javascript/app.ts"
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
    publicPath: "/demo-ang2/assets/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
