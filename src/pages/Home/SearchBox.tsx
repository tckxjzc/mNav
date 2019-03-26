import React, {Component} from 'react';
import styles from './search_box.scss';


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

class SearchBox extends Component {

    render() {
        return <div className={styles.container}>
            <div className={styles["input-box"]}>
                <input ref={this.input} type={'text'} placeholder={'keyword'}/>
            </div>
            <div className={styles.list}>
                <Item name={'Baidu'} onClick={() => this.search()}/>
                <Item name={'Google'} onClick={() => this.search('https://www.google.com/search?q=#keyword#')}/>
                <Item name={'Github'} onClick={() => this.search('https://github.com/search?q=#keyword#')}/>
                <Item name={'iciba'} onClick={() => this.search('https://m.iciba.com/#keyword#')}/>
                <Item name={'Comicat'}
                      onClick={() => this.search('http://m.comicat.org/search.php?keyword=#keyword#')}/>
                <Item name={'Nyaa'} onClick={() => this.search('https://nyaa.si/?q=#keyword#')}/>
            </div>
        </div>
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                this.search();
            }
        });
    }

    //input
    input = React.createRef<HTMLInputElement>();

    search = (url: string = 'https://m.baidu.com/s?wd=#keyword#') => {
        location.href = url.replace('#keyword#', this.input.current.value);
    };

}

export default SearchBox;