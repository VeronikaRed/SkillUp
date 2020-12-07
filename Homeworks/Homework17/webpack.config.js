module.exports = {
    entry: './src/js/script.js',
    output: {
      filename: './dist/bundle.js'
    },
    resolve: {
      modules: ['node_modules']
    },
    mode: 'development'
  };