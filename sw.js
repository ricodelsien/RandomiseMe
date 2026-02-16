/* RandomiseMe! Service Worker */
const CACHE_VERSION = 'randomiseme-v0.7a-2026-02-16';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './i18n.js',
  './manifest.json',
  './manifest-blue.json',
  './manifest-green.json',
  './manifest-orange.json',
  './manifest-pink.json',
  './manifest-violet.json',
  './manifest-yellow.json',
  './icon.png',
  './icon-192.png',
  './icon/icon_blue.png',
  './icon/icon_green.png',
  './icon/icon_orange.png',
  './icon/icon_pink.png',
  './icon/icon_violet.png',
  './icon/icon_yellow.png',
  './icon/icon_blue-192.png',
  './icon/icon_green-192.png',
  './icon/icon_orange-192.png',
  './icon/icon_pink-192.png',
  './icon/icon_violet-192.png',
  './icon/icon_yellow-192.png',
  './logo/Randomise.png',
  './RandomiseMe.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_VERSION ? caches.delete(k) : Promise.resolve())))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Network-first for navigation so updates come through
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Cache-first for everything else
  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      })
    )
  );
});
