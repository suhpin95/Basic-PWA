const staticInstrument = "Swarasmruti-v1";
const assets = [
  "./",
  "./index.html",
  "./stylesheet/app.css",
  "./js/app.js",
  "./images/venna.jpeg",
  "./images/violin.jpg",
  "./images/tabla.jpg",
  "./images/mandolin.jpg",
  "./images/piano.jpg",
  "./images/Electric-Guitar.png",
  "./images/backGroundImage.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticInstrument).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});