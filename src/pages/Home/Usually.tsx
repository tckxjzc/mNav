import React, {Component} from 'react';
import styles from './usually.scss';
import {bookmarks} from "../../store";


class Usually extends Component {
    render() {
        return <div className={styles.container}>
            <div>
                <h3>Usually</h3>
            </div>
            <ul className={styles.list}>
                {
                    bookmarks.map((item) => {
                        return <li key={item.url}><a href={item.url}>{item.name}</a></li>;
                    })
                }

            </ul>
        </div>
    }
}

export default Usually;