// Service worker mínimo — necesario para que Chrome ofrezca "Instalar app".
// No cachea nada todavía: simplemente deja pasar cada pedido a la red.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
