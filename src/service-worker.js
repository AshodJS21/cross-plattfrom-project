/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("cacheData").then((cache) => {
      console.log(statics);
      cache.add("/");
      return cache.addAll(statics.map((url) => url.url));
    })
  );
});


self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;

  if (event.request.url.includes('/api.') && navigator.onLine) {
    return
  }

  event.respondWith(
    caches.open("cacheData").then(async (cache) => {
      const response = await cache.match(event.request);
      if (response) {
        return response;
      } else {
        const fetchData = fetch(event.request);
        fetchData.then((response_1) => {
          cache.put(event.request, response_1.clone());
        });
        return fetchData;
      }
    })
  );
});

