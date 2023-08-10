import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*serviceWorkerRegistration.register({
  onNotificationClick: (notification) => {
    window.location.href = notification.data.url;
  },
  onOfflineReady: () => {
    console.log('La aplicación está lista para usarse sin conexión.');
  },
  onInstalled: () => {
  },
});*/

reportWebVitals();
