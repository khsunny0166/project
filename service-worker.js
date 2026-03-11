const CACHE_NAME = 'junho-gym-v1';
const ASSETS = [
  './',
  './index.html',
  // 여기에 캐싱할 주요 파일들을 추가하세요
];

// 1. 설치 단계: 파일들 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// 2. 요청 단계: 네트워크 대신 캐시에서 파일 찾아 제공
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
