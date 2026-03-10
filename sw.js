// Service Worker (설치 활성화를 위한 필수 파일)
self.addEventListener('install', (e) => {
  console.log('PWA Service Worker installed');
});
self.addEventListener('fetch', (e) => {
  // 캐싱 로직 생략 가능
});
