const staticCashName = 'static-name-v1'
const dinamicCashName = 'dinamic-name-v1'

const ASSETS = [
   '/index.html'
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
   event.respondWith(cachesFirst(event.request))
})

const cachesFirst = async (request) => {
   try {
      const cached = await caches.match(request)
      return cached || fetchCaches(request)
   } catch (e) {
      console.log(e)
   }
}

const fetchCaches = async (request) => {
   try {
      const responce = await fetch(request)
      const cache = await caches.open(dinamicCashName)
      cache.put(request.url.startsWith('http') && request.url, responce.clone())
      return responce
   } catch (e) {
      console.log(e)
   }
}