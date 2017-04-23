var webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../../src/scripts/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
        '../../src/scripts/**/*.spec.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
