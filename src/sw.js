const staticCashName = 'static-name-v1'
const dinamicCashName = 'dinamic-name-v1'

const ASSETS = [
   '/index.html',
   'https://cdnjs.cloudflare.com/ajax/libs/antd/5.12.2/antd.min.js',
   '/index.css'
]

self.addEventListener('install', async () => {
   const cache = await caches.open(staticCashName)
   cache.addAll(ASSETS)
});

self.addEventListener('activate', async () => {
   const cachesKeysArr = await caches.keys()
   await Promise.all(cachesKeysArr.filter(key => key !== staticCashName).map(key => caches.delete(key)))
});

self.addEventListener('fetch', (event) => {
   // event.respondWith(cachesFirst(event.request))
   event.respondWith(
      caches.match(event.request).then(cacheRes => {
         return cacheRes || fetch(event.request).then(responce => {
            return caches.open(dinamicCashName).then(cache => {
               cache.put(event.request.url, responce.clone())
               return responce
            })
         })
      })
   )
})

//const cachesFirst = async (request) => {
//    const cached = await caches.match(request)
//    try {
//       return cached ?? await fetch(request).then(responce => {
//          return networkFirst(responce)
//       })
//    } catch (e) {
//       return networkFirst(request)
//    }
// }

// const networkFirst = async (request) => {
//    const cache = await caches.open(dinamicCashName)

//    try {
//       cache.put(request, responce.clone())
//       return responce
//    } catch (e) {
//       const cached = await cache.match(request)
//       // return await cached.url('*');
//    }
// }