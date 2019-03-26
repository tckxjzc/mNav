import React, {Component} from 'react';
import styles from './usually.scss';


class Usually extends Component{
    render(){
        return <div className={styles.container}>
            <div>
                <h3>Usually</h3>
            </div>
            <ul className={styles.list}>
                <li><a href={'http://m.dilidili.wang/'}>嘀哩嘀哩，这里是兴趣使然的无名小站</a></li>
                <li><a href={'http://m.comicat.org/'}>漫猫动漫下载</a></li>
                <li><a href={'https://nyaa.si/'}>nyaa 表世界</a></li>
                <li><a href={'https://sukebei.nyaa.si/'}>nyaa 里世界</a></li>
                <li><a href={'https://www.liuli.in/wp'}>琉璃神社</a></li>
                <li><a href={'https://e-hentai.org/lofi/'}>E-Hentai</a></li>
                <li><a href={'https://chobit.cc/'}>Chobit</a></li>
                <li><a href={'http://www.getchu.com/sp/top.html'}>Getchu</a></li>
                <li><a href={'http://danbooru.donmai.us/'}>danbooru</a></li>
                {/*<li><a href={''}></a></li>*/}
                {/*<li><a href={''}></a></li>*/}
                {/*<li><a href={''}></a></li>*/}
            </ul>
        </div>
    }
}
export default Usually;