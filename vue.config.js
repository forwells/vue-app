// process.env.NODE_ENV = require();

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    outputDir: 'built',
    indexPath: 'index.html',
    filenameHashing: true,
    css: {
        sourceMap: false,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/css/variables.scss";`
            }
        }
    },
    devServer: {
        port: 8080,
        proxy: {
            '/v1': {
                target: 'http://api.test/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    }
}