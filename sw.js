importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"),workbox.precaching.precacheAndRoute([]),self.addEventListener("install",e=>{const t=["https://cdn.ampproject.org/v0.js","https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js","https://cdn.ampproject.org/shadow-v0.js","index.html","/"],o=workbox.core.cacheNames.runtime;e.waitUntil(caches.open(o).then(e=>e.addAll(t)))}),workbox.routing.registerRoute(/(index|\/articles\/)(.*)html|(.*)\/$/,e=>workbox.strategies.networkFirst().handle(e).then(e=>e||caches.match("offline.html"))),workbox.routing.registerRoute(/\.(?:js|png|jpg|svg)$/,workbox.strategies.cacheFirst());