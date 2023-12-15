const { defineConfig } = require('@vue/cli-service')
// const path = require('path');

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 在这里配置 Webpack Loader
    config.module
    .rule('js')
    .test(/\.(js|ts|jsx|tsx|vue)$/)
    .use(['delete-others-log-loader']);

  }
})
