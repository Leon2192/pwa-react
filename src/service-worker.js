/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('beforeinstallprompt', (event) => {
  // Evitar que el navegador maneje automáticamente la instalación
  event.preventDefault();

  // Guardar el evento para usarlo más tarde
  self.deferredPrompt = event;

  // Opcionalmente, puedes mostrar tu propio mensaje de instalación aquí
});

// Agrega el evento beforeinstallprompt en el Service Worker
self.addEventListener('beforeinstallprompt', (event) => {
  // Evitar que el navegador maneje automáticamente la instalación
  event.preventDefault();

  // Enviar un mensaje a la aplicación para manejar el banner de instalación
  self.clients.matchAll().then((clients) => {
    if (clients && clients.length) {
      clients[0].postMessage({ type: 'showInstallBanner' });
    }
  });
});

// Manejo de eventos de push para mostrar notificaciones
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: `${process.env.PUBLIC_URL}/logo192.png`, // Ruta a tu icono de notificación
  };

  event.waitUntil(
    self.registration.showNotification('Título de la Notificación', options)
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
