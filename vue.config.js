module.exports = {
    // web wap
    publicPath: process.env.NODE_ENV === 'production' ?
        '/qrtest/' : '/',

    productionSourceMap: process.env.NODE_ENV === 'production' ?
        false : true,

    devServer: {
        port: 8080,
        open:true,
      
    },
}