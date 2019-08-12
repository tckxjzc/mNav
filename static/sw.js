var verison='2.1';
var cacheCurrent='cache'+verison;
this.addEventListener('fetch',function (e) {
    // console.log(`${e.request.url} %o`,e);
    e.respondWith(caches.match(e.request).then(function (response) {
        if(response){
            return response;
        }
        return fetch(e.request.clone()).then(function (response) {
            if (!response || response.status !== 200 || response.type !== "basic") {
                return response;
            }
            caches.open(cacheCurrent).then(function (cache) {

               cache.put(e.request.clone(),response.clone());
            });
            return response.clone();
        });
    }))

});

// this.addEventListener('message',function (e) {
//     console.log(`sw.onmessage o%`,e);
//     this.clients.matchAll({includeUncontrolled:true}).then(function (all) {
//         console.log(all)
//         all[0].postMessage({'sw':'test-0'});
//     })
// });

this.addEventListener('install',function (e) {
    console.log('sw install------');
    caches.keys().then(function (keys) {
        keys.forEach(function (item) {
            if(item!=cacheCurrent){
                caches.delete(item);
            }
        });
    });
    this.skipWaiting();
    e.waitUntil(caches.open(cacheCurrent).then(function (cache) {
        cache.addAll([
            './',
        ])
    }))
});
// this.addEventListener('active',function (e) {
//     console.log('active-----------')
// });
//
// self.clients.matchAll({ includeUncontrolled: true}).then(function (all) {
//    console.log(all);
//   setTimeout(function () {
//       all[0].postMessage({id:0,msg:'0'})
//   },5000)
// });
// let _self=self;
// setTimeout(function () {
//     _self.postMessage({id:0,msg:'s0'})
// },5000)
self.addEventListener('activate',function(e){
   e.waitUntil(clients.claim());
    console.log('activate-----');
});

console.log('sw runing');
