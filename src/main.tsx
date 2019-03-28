import React from 'react';
import {render} from 'react-dom';
import App from "./App";
/**
 * styles
 */
import 'styles/base.global.scss';
import 'tz-library/style/base.scss';
import 'tz-library/style/mobile.media.scss';

/**
 * start
 */
render(<App/>,
    document.getElementById('container'));

window.addEventListener('load',()=>{
    if('serviceWorker' in window.navigator){
        window.navigator.serviceWorker.register(wbp.path+'/sw.js').then((e)=>{
            console.log(e);
        });
    }
});

if(!wbp.dev){
    setTimeout(() => {
        try {
            let speed = {
                url: location.href,
                dom: JSON.stringify(performance.getEntries()[0]),
                type: 1,
                entries: JSON.stringify(performance.getEntries()),
            };

            fetch('//up.tckxjzc.xyz/upload/speed', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(speed)
            });
        } catch (e) {
            console.log(e);
        }

    }, 0);
}