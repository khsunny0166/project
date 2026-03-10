const CACHE="junho-workout-v1";

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE).then(cache=>{

return cache.addAll([
"/project/",
"/project/index.html"
]);

})

);

});

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request).then(response=>{

return response || fetch(event.request);

})

);

});
