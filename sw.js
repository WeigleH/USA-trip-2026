const CACHE='southwest-app-20260920-v17';
const CORE=['./','index.html','details.js','document-data.js','document-links.js','trip-revision.js','final-leg.js','travel-polish.js','travel-polish.css','midnight.css','app-mode.js','manifest.webmanifest','assets/southwest-road-trip.webp','assets/app-icon-180.png','assets/app-icon-192.png','assets/app-icon-512.png'];
const urls=CORE.map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(urls)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('southwest-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const u=new URL(event.request.url);
 if(event.request.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope))return;
 // Documents are deliberately not silently saved on the device.
 if(u.pathname.includes('/documents/'))return;
 if(event.request.mode==='navigate'&&(u.pathname===new URL(self.registration.scope).pathname||u.pathname.endsWith('/index.html'))){event.respondWith(caches.open(CACHE).then(c=>c.match(new URL('index.html',self.registration.scope).href)).then(r=>r||fetch(event.request)));return;}
 if(urls.includes(u.href))event.respondWith(caches.open(CACHE).then(c=>c.match(event.request)).then(r=>r||fetch(event.request)));
});
