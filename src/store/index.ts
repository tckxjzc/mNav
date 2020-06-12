import {observable} from "mobx";
import {storage} from "utils/storage";

//历史记录
const HISTORY_WORD_KEY = 'm_history';
export let historyWord = storage.getItem(HISTORY_WORD_KEY) || [];


export function saveHistoryWord(word) {

    if (word && !historyWord.includes(word)) {
        historyWord.push(word);
        storage.setItem(HISTORY_WORD_KEY, historyWord.slice(-10));
    }

}

export let bookmarks = observable([
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

]);
const hiddenUrl = [
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

export function showHiddenUrl() {

    let showHiddenUrlFlag = false;
    let showHiddenUrlTimes = null;
    let showHiddenUrlClickCount = 1;
    return function () {
        if (showHiddenUrlFlag) {
            return;
        }
        if (showHiddenUrlClickCount >= 3) {
            bookmarks.push(...hiddenUrl);
            showHiddenUrlFlag = true;
        }
        console.log(showHiddenUrlClickCount)
        showHiddenUrlClickCount++;
        clearTimeout(showHiddenUrlTimes);

        showHiddenUrlTimes = setTimeout(() => {
            showHiddenUrlClickCount = 1;
        }, 1000);

    }
}

export let searchBoxData = observable({
    words: historyWord,
    show: false
});
//清除搜索历史
export function clearHistoryWord() {
    let times = null;
    let count = 1;
    return function () {
        if (count >= 3) {
            localStorage.removeItem(HISTORY_WORD_KEY);
            historyWord = [];
            searchBoxData.words = [];
            count = 1;
            if (DEVELOPMENT) {
                console.log('history clear...')
            }
        }
        count++;
        clearTimeout(times);

        times = setTimeout(() => {
            count = 1;
        }, 1000);
    }
}

window.addWordList = function (data) {
    searchBoxData.words = data.s;
};
