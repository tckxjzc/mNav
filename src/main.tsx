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

// window.addEventListener('load',()=>{
    if('serviceWorker' in window.navigator){
        navigator.serviceWorker.addEventListener('install',function () {
           console.log('main:install___');
           //controller未准备完成
        });
        navigator.serviceWorker.oncontrollerchange=function(){
            //controller准备完成
            console.log('This page is now controlled by:', navigator.serviceWorker.controller);
        };

        // navigator.serviceWorker.getRegistrations().then(function (result) {
        //     result.map(function (item) {
        //         item.unregister()
        //     })
        // })
        window.navigator.serviceWorker.register(wbp.path+'/sw.js').then((e)=>{
            console.log(e);
        });
    }
// });

// document.body.onclick=function(){console.log('5')
//     navigator.serviceWorker.controller.postMessage({id:'5',u:555})
// }

//
//
// navigator.serviceWorker.addEventListener('message',function (e) {
//     console.log(`serviceWorker.onmessage o%`,e);
// });




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
// window.postMessage({id:"2",msg:"55"},location.href);
