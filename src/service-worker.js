/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

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

// Agrega el evento beforeinstallprompt en el Service Worker
self.addEventListener('beforeinstallprompt', (event) => {
  // Evitar que el navegador maneje automáticamente la instalación
  event.preventDefault();

  // Enviar un mensaje a la aplicación para manejar el banner de instalación
  self.clients.matchAll().then((clients) => {
    if (clients && clients.length) {
      clients[0].postMessage({ type: 'showInstallBanner' });
      const installButton = document.createElement('button');
      installButton.innerText = 'Instalar';
      installButton.addEventListener('click', () => {
        event.prompt();
      });
      document.body.appendChild(installButton);
    }
  });
});
