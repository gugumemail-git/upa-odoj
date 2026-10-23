const CACHE_NAME = 'odoj-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // Anda bisa menambahkan file lain di sini jika ada (misal: gambar)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Kembalikan dari cache jika ada, jika tidak ambil dari jaringan
        return response || fetch(event.request);
      })
  );
});