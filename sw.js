const VERSION = 'v1';

self.addEventListener('install', event => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
	const request = event.request;
	// get
	if (request.method !== 'GET' || request.url.indexOf('http') !== 0) {
		return;
	}

	// buscar en cache
	event.respondWith(cachedResponse(request));

	// actualizar el cache
	if (!request.headers.has('range')) {
		event.waitUntil(updateCache(request));
	}
});

async function precache() {
	try {
		const cache = await caches.open(VERSION);
		return cache.addAll([
			'/',
			'/index.html',
			'/assets/index.js',
			'/assets/MediaPlayer.js',
			'/assets/plugins/AutoPlay.js',
			'/assets/plugins/AutoPause.js',
			'/assets/index.css',
			'/assets/BigBuckBunny.mp4',
		]);
	} catch (e) {
		console.error(`Error to precache: ${e}`);
	}
}

async function cachedResponse(request) {
	try {
		const cache = await caches.open(VERSION);
		const response = await cache.match(request);
		return response || fetch(request);
	} catch (e) {
		console.error(`Error to cachedResponse: ${request.url}`);
	}
}

async function updateCache(request) {
	try {
		const cache = await caches.open(VERSION);
		const response = await fetch(request);
		return cache.put(request, response);
	} catch (e) {
		console.error(`Error to updateCache: ${request.url}`);
	}
}
