const CACHE_NAME = 'junho-pwa-v2';
const ASSETS = [
  './',
  './index.html',
  'https://i.postimg.cc/QxWSC2MD/Screenshot-20251029-084633-Kakao-Talk.png',
  'https://i.postimg.cc/qMnnw9Gt/Screen-Recording-20260116-214823-Cap-Cut.jpg'
];

// 설치 단계: 파일들을 캐시에 저장
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 활성화 단계: 이전 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 가져오기 단계: 캐시 우선 전략 (네트워크 연결 시 최신 정보 우선)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
