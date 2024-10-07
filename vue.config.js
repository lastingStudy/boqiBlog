const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:8082,
    proxy:{
      'api':{
        target:'http://localhost:8081',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'api'
        }
      }
    }
  }
})
