import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import argv from "./argv.js";
import {enabledCopyPlugin} from './file.js';
import {filterEntry, filterTemplate} from "../utils/index.js";

const {__dirname} = argv;


//file entry
export const entry = filterEntry({
    'index': path.resolve(__dirname, './src/main'),
    'test': path.resolve(__dirname, './test/index'),
});


const baseTemplate = path.resolve(__dirname, './template/index.ejs');
//dev output
const devHtmlList = [
    new HtmlWebpackPlugin({
        template: baseTemplate,
        filename: `index.html`,
        inject: false,
        chunks: ['index'],
        chunksSortMode: 'manual'
    })
];
//prods output
const prodsHtmlList = [
    new HtmlWebpackPlugin({
        template: baseTemplate,
        filename: `index.html`,
        inject: false,
        title:'Tz导航',
        chunks: ['index'],
        chunksSortMode: 'manual'
    })
];

const htmlList = filterTemplate(argv.dev ? devHtmlList : prodsHtmlList);

const pluginList = [...htmlList];
//copy files
if (enabledCopyPlugin && !argv.dev) {
    pluginList.push(
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: path.resolve(__dirname, './dist')
            }
        ])
    );
}
//plugins
export const plugins = [
    new webpack.DefinePlugin({
        'DEVELOPMENT': JSON.stringify(argv.dev)
    }),
    ...pluginList
];

//externals
export const externals = {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM',
    // 'jquery': '$',
    // 'moment': 'moment',
    // 'swiper':'Swiper',
    // 'mobx': 'mobx',
    // 'mobx-react': 'mobxReact',
};
