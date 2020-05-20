import {observable} from "mobx";

export let bookmarks = [
    {
        "name": "末日动漫资源库",
        "url": "https://share.acgnx.se"
    },
    {
        "name": "动漫花园_1",
        "url": "https://www.dmhy.org/"
    },
    {
        "name": "动漫花园_2",
        "url": "https://www.dongmanhuayuan.com/"
    },
    {
        "name": "漫猫动漫下载",
        "url": "http://m.comicat.org/"
    },
    // {
    //     "name": "nyaa 表世界",
    //     "url": "https://nyaa.si/"
    // },
    // {
    //     "name": "nyaa 里世界",
    //     "url": "https://sukebei.nyaa.si/"
    // },
    // {
    //     "name": "琉璃神社",
    //     "url": "https://www.liuli.in/wp"
    // },
    // {
    //     "name": "E-Hentai",
    //     "url": "https://e-hentai.org/lofi/"
    // },
    // {
    //     "name": "Chobit",
    //     "url": "https://chobit.cc/"
    // },
    // {
    //     "name": "Getchu",
    //     "url": "http://www.getchu.com/sp/top.html"
    // },
    // {
    //     "name": "danbooru",
    //     "url": "http://danbooru.donmai.us/"
    // }
];

export  let searchBoxData=observable({
    words:[
    ],
    show:false
});


window.addWordList=function (data) {
    searchBoxData.words=data.s;
};
