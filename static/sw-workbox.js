const arr=[];
//放workbox前面，才能看到全部请求，否则不会显示workbox处理过的请求
self.addEventListener('fetch',(envent)=>{
    arr.push(envent.request.clone().url);
    console.log(arr);
});


importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


// workbox.routing.registerRoute(
//     function (a,b,c) {
//         console.log('----registerRoute----')
//         console.log(a)
//         console.log(b)
//         console.log(c)
//         return false
//     },
//     new workbox.strategies.CacheFirst({
//         cacheName: "res",
//         plugins:[
//             new workbox.expiration.Plugin({
//                 maxEntries:20
//             })
//         ]
//     })
// );
workbox.routing.registerRoute(
    new RegExp('/resource/.*'),
    new workbox.strategies.CacheFirst({
        cacheName: "res",
        plugins:[
            new workbox.expiration.Plugin({
                maxEntries:20
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('/$'),
    new workbox.strategies.NetworkFirst({
        cacheName:'pages'
    })
);
workbox.routing.registerRoute(
    new RegExp('(\\.html)$'),
    new workbox.strategies.NetworkFirst({
        cacheName:'pages'
    })
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();
