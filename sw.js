// 오프라인에서도 열리도록 앱 파일을 캐시합니다. 파일을 고치면 VERSION을 올려 주세요.
const VERSION = 'v13';
const CACHE = `my-english-${VERSION}`;
const FILES = ['./', 'index.html', 'style.css', 'app.js', 'data.js', 'manifest.json', 'icons/icon.svg', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// 네트워크 우선, 실패하면 캐시 (온라인일 땐 항상 최신 파일)
// cache: 'no-cache' — 브라우저에 저장된 옛 파일 대신 서버에 새 버전이 있는지 매번 확인
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
