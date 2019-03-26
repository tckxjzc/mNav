var cacheT='cacheT';
this.addEventListener('fetch',function (e) {
    console.log(`${e.request.url} %o`,e);
    // console.log(e);
    e.respondWith(caches.match(e.request).then(function (response) {
        if(response){
            console.log(response.headers.get('content-type')+'---'+e.request.url)
            return response;
        }
        console.log('===')
        console.log(e.request)

        return fetch(e.request.clone()).then(function (response) {
            if (!response || response.status !== 200 || response.type !== "basic") {
                return response;
            }
            caches.open(cacheT).then(function (cache) {
               cache.put(e.request.clone(),response.clone());
            });
            return response.clone();
        });
    }))

});
this.addEventListener('install',function (e) {
    console.log('install---');
    this.skipWaiting();
    caches.open(cacheT);
    e.waitUntil(caches.open(cacheT).then(function (cache) {
        cache.addAll([
            '/',
        ])



    }))
});