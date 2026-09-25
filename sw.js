/*
  Service worker di IroiroWada.

  Cache versionata: cambia CACHE_VERSION ad ogni deploy con modifiche
  sostanziali (nuovi file, contenuti diversi) per invalidare la cache
  dei dispositivi che hanno già installato l'app come PWA. Chi ha
  installato la versione vecchia la vedrà aggiornata al successivo
  avvio dell'app (il nuovo service worker prende controllo subito
  grazie a skipWaiting + clients.claim).
*/
const CACHE_VERSION = 'iroirowada-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Solo GET: richieste di altro tipo (es. verso l'API font di Google) passano dritte alla rete
  if(event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if(cached) return cached;
      return fetch(event.request).then((response) => {
        // Metti in cache solo risposte valide e same-origin (non i font esterni)
        if(response.ok && new URL(event.request.url).origin === location.origin){
          const responseClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
