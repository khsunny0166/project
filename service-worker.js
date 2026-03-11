// sw.js (이 파일은 오직 서비스 워커 이벤트만 처리해야 합니다)
const CACHE_NAME = 'junho-v1';
const ASSETS = [
  './', // index.html 대신 경로의 루트를 캐싱
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
