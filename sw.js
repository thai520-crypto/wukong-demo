/* 悟空外卖演示 Service Worker：壳文件走网络优先，图片走缓存优先，离线也能打开。 */
const VERSION = "wk-v16";
const SHELL = ["./", "./index.html", "./app.css?v=16", "./app.js?v=16", "./data.js?v=16", "./manifest.webmanifest", "./static/logo.jpg", "./static/icon-192.png", "./static/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const isImage = /\.(jpg|jpeg|png|ico|webp)$/i.test(url.pathname);
  if (isImage) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) caches.open(VERSION).then((c) => c.put(req, res.clone()));
        return res;
      }))
    );
    return;
  }
  event.respondWith(
    fetch(req).then((res) => {
      if (res.ok) caches.open(VERSION).then((c) => c.put(req, res.clone()));
      return res;
    }).catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
