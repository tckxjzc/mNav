import {observable} from "mobx";

export let bookmarks = [
    {
        "name": "嘀哩嘀哩，这里是兴趣使然的无名小站",
        "url": "http://m.dilidili.wang/"
    },
    {
        "name": "漫猫动漫下载",
        "url": "http://m.comicat.org/"
    },
    {
        "name": "nyaa 表世界",
        "url": "https://nyaa.si/"
    },
    {
        "name": "nyaa 里世界",
        "url": "https://sukebei.nyaa.si/"
    },
    {
        "name": "琉璃神社",
        "url": "https://www.liuli.in/wp"
    },
    {
        "name": "E-Hentai",
        "url": "https://e-hentai.org/lofi/"
    },
    {
        "name": "Chobit",
        "url": "https://chobit.cc/"
    },
    {
        "name": "Getchu",
        "url": "http://www.getchu.com/sp/top.html"
    },
    {
        "name": "danbooru",
        "url": "http://danbooru.donmai.us/"
    }
];

export  let searchBoxData=observable({
    words:[
    ],
});


window.addWordList=function (data) {
    searchBoxData.words=data.s;
};