module.exports = {
  mode: "extends",
  webpack: {
    configure: {
      resolve: {
        fallback: {
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          https: require.resolve("https-browserify"),
          http: require.resolve("stream-http"),
          tty: require.resolve("tty-browserify"),
          path: require.resolve("path-browserify"),
          os: require.resolve("os-browserify"),
          fs: false
        },
        extensions: ['.ts', '.js', '.json', '.tsx']
      }
    }

  },
};
