importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

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

workbox.core.skipWaiting();
workbox.core.clientsClaim();