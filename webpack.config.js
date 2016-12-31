module.exports = {
  entry: {
    index: "./src/main/javascript/entry.ts"
  },
  output: {
    path: "./target/generated-web-resources/assets/",
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
    publicPath: "/angular-boilerplate/assets/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
