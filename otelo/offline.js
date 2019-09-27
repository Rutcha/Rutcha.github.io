self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([ // quais arquivos devem ser salvos na cache
        './',
        './index.html',
        './offline.js',
        './favicon-196x196.png',
        './favicon-128x128.png',        
        './favicon-96x96.png',
        './favicon-32x32.png',
        './favicon-16x16.png',
        './favicon-128.png',
        './favicon.png',
        './simple-console.js',
        './simple-console.css',
        './otelo.js',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => { // quando pedir um dos arquivos da lista acima, dar o salvo na cache
  event.respondWith(
    caches.match(event.request)
  )
})