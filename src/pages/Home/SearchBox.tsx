import React, {Component} from 'react';
import styles from './search_box.scss';
import {searchBoxData} from "../../store";
import {observer} from "mobx-react";
import {addScriptElement} from "../../utils";


type ItemProps = {
    name: string,
    onClick
};

class Item extends Component<ItemProps> {
    render() {
        return <a onClick={this.props.onClick} className={styles.item}>
            <p>{this.props.name}</p>
        </a>
    }
}
@observer
class SearchBox extends Component {
    constructor(props){
        super(props);
        let cb='addWordList';
        this.wordUrl=new URL(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?csor=1&josn=1&req=2&p=3&cb=${cb}`);
    }
    render() {
        return <div className={styles.container}>
            <div className={styles["input-box"]}>
                <input onChange={this.onChange}
                       onBlur={this.onBlur}
                       onFocus={this.onFocus}
                       ref={this.input} type={'text'} placeholder={'keyword'}/>
                <ul>
                    {searchBoxData.show?searchBoxData.words.map((item)=>{
                        return <li onClick={()=>this.selectWord(item)} key={item}>{item}</li>
                    }):null}
                </ul>
            </div>
            <div className={styles.list}>
                <Item name={'Baidu'} onClick={() => this.search()}/>
                <Item name={'Google'} onClick={() => this.search('https://www.google.com/search?q=#keyword#')}/>
                <Item name={'Github'} onClick={() => this.search('https://github.com/search?q=#keyword#')}/>
                <Item name={'iciba'} onClick={() => this.search('https://m.iciba.com/#keyword#')}/>
                <Item name={'Comicat'}
                      onClick={() => this.search('http://m.comicat.org/search.php?keyword=#keyword#')}/>
                {/*<Item name={'Nyaa'} onClick={() => this.search('https://nyaa.si/?q=#keyword#')}/>*/}
            </div>
        </div>
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                this.search();
            }
        });
    }
    onChange=()=>{
        let val = this.input.current.value;
        if (val.replace(/\s/g, '')) {
            this.wordUrl.searchParams.set('wd', val);
            this.wordUrl.searchParams.set('pwd', val);
            addScriptElement(this.wordUrl.href);
        } else {
            searchBoxData.words=[];
        }

    };
    onFocus=()=>{
        searchBoxData.show=true;
    };
    onBlur=()=>{
        setTimeout(()=>{
            searchBoxData.show=false;
        },80);

    };


    //input
    input = React.createRef<HTMLInputElement>();
    wordUrl:URL;

    selectWord=(word)=>{
        searchBoxData.words=[];
        this.input.current.value=word;
    };

    search = (url: string = 'https://m.baidu.com/s?wd=#keyword#') => {
        location.href = url.replace('#keyword#', this.input.current.value);
    };

}

export default SearchBox;
