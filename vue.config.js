module.exports = {
  chainWebpack: webpackConfig => {
    webpackConfig.plugin('html').tap(([options]) => [Object.assign(options, {
      filename: 'subdirectory/index.html'
    })])
  }
}
