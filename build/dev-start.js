process.env.tz_env='dev';
let getIp=require('../config/get-ip');
let port=8000;
let webpack = require('webpack');
let path=require('path');
let fs=require('fs');
let webpackConfig = require('../webpack.config');
webpackConfig.entry.app=webpackConfig.entry.app||[];
let appServer='http://localhost';//dev.tckxjzc.xyz';//http://${getIp('en0')}/
webpackConfig.entry.app.unshift(`webpack-dev-server/client?${appServer}`);
let compiler = webpack(webpackConfig);
let WebpackDevServer = require("webpack-dev-server");
let server=new  WebpackDevServer(compiler,{
    contentBase:[path.join(__dirname,'../static')],
    host:'0.0.0.0',
    port:port,
    disableHostCheck: true,
    historyApiFallback: true,
    // https:{
    //     key:fs.readFileSync('/Users/tckxjzc/Documents/dev_tckxjzc_xyz/dev.key'),
    //     cert:fs.readFileSync('/Users/tckxjzc/Documents/dev_tckxjzc_xyz/dev.pem'),
    // },
    proxy: {
        '/api': {
            target: 'http://47.104.180.253:8200',
            pathRewrite:{'^/api':''},
            changeOrigin: true,
            secure: false
        },
        '/mobile': {
            target:'https://dev.tckxjzc.xyz:8000',
            pathRewrite:{'^/mobile':''},

        },
        // '/':{
        //     // target:'http://localhost',
        //     bypass: function(req, res, proxyOptions) {
        //         if (req.headers.accept&&req.headers.accept.indexOf('html') !== -1) {
        //             return '/index.html';
        //         }
        //
        //     }
        // }
    }

});

let ip=require('../config/get-ip')();

server.listen(port,'',()=>{
    console.log(`http://${ip}:${port}`);
    // require('opn')(`http://${ip}:${port}`);
});
