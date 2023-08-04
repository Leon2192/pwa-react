import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
///serviceWorkerRegistration.register();
serviceWorkerRegistration.register({
  onNotificationClick: (notification) => {
    // Lógica para manejar el clic en la notificación
    // Por ejemplo, podrías redirigir a una página específica
    window.location.href = notification.data.url;
  },
  onOfflineReady: () => {
    // Lógica para manejar cuando la app está lista para usarse en línea
    console.log('La aplicación está lista para usarse sin conexión.');
  },
  onInstalled: () => {
    // No es necesario agregar nada aquí, ya que la lógica del banner de instalación
    // se manejará en el Service Worker
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
