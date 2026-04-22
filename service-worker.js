// Simple cache-first service worker for offline play.
// Bump CACHE_VERSION whenever any game file is updated to force a refresh.
const CACHE_VERSION = 'v2';
const CACHE_NAME = 'mishachakia-' + CACHE_VERSION;

const FILES_TO_CACHE = [
  'index.html',
  'games.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'memory.html',
  'simon.html',
  'puzzle.html',
  'math.html',
  'coloring.html',
  'spot.html',
  'odd.html',
  'bubbles.html',
  'stop.html',
  'connection.html',
  'shadow.html',
  'sequence.html',
  'proverbs.html',
  'maze.html',
  'blur.html',
  'wordcomplete.html',
  'sort.html',
  'belong.html',
  'heavier.html',
  'clock.html',
  'shapes.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        // Cache successful same-origin responses for future use
        if (resp && resp.ok && new URL(req.url).origin === self.location.origin) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return resp;
      }).catch(() => caches.match('index.html'));
    })
  );
});
