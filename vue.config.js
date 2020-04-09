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
    }
}