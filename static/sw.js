var previousVerison='1.0';
var verison='1.1';
var cacheCurrent='cache'+verison;
this.addEventListener('fetch',function (e) {
    console.log(`${e.request.url} %o`,e);
    e.respondWith(caches.match(e.request).then(function (response) {
        if(response){
            console.log(response.headers.get('content-type')+'---'+e.request.url);
            console.log(response);
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
this.onmessage=function(e){
    console.log(e);
};

this.addEventListener('install',function (e) {
    caches.delete('cache'+previousVerison);
    this.skipWaiting();
    e.waitUntil(caches.open(cacheCurrent).then(function (cache) {
        cache.addAll([
            '/',
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