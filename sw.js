const CACHE_NAME = "serumap-v5";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
const APP_ASSETS = new Set(APP_SHELL.map(path => new URL(path, self.location.href).href));
const INDEX_URL = new URL("./index.html", self.location.href).href;

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("serumap-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(INDEX_URL, response.clone()).catch(() => {});
        }
        return response;
      } catch {
        return (await caches.match(INDEX_URL)) || new Response(
          "Serumap no está disponible sin conexión. Conéctate una vez para guardar la aplicación en este dispositivo.",
          { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
        );
      }
    })());
    return;
  }

  // Cache only the known application shell; do not store arbitrary same-origin GET requests.
  if (!APP_ASSETS.has(url.href)) return;

  const cachedResponse = caches.match(request);
  const networkUpdate = fetch(request).then(response => {
    if (!response.ok) return response;
    const copy = response.clone();
    return caches.open(CACHE_NAME)
      .then(cache => cache.put(request, copy))
      .catch(() => {})
      .then(() => response);
  });

  event.waitUntil(networkUpdate.then(() => undefined).catch(() => undefined));
  event.respondWith(
    cachedResponse.then(cached => cached || networkUpdate).catch(() => networkUpdate)
  );
});
