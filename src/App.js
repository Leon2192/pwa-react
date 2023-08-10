import React, { useEffect } from "react";
import LandingEN from "./components/LandingEN";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react"; // Cambia la importación aquí
import { registerServiceWorker } from "./serviceWorkerRegistration";

function App() {

  useEffect(() => {
    registerServiceWorker();
  }, []);

  useEffect(() => {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'showInstallBanner') {
        // Mostrar el banner de instalación en la aplicación
        const installButton = document.createElement('button');
        installButton.innerText = 'Instalar';
        installButton.addEventListener('click', () => {
          // Obtener el evento de instalación diferida y ejecutarlo
          const deferredPrompt = window.deferredPrompt;
          if (deferredPrompt) {
            deferredPrompt.prompt();
          }
        });

        // Agregar el botón al DOM
        document.body.appendChild(installButton);
      }
    });
  }, []);

  useEffect(() => {
    // Verificar si el navegador es compatible con el Web App Manifest y el Service Worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      // Registrar el Service Worker en la raíz de tu sitio
      navigator.serviceWorker
        .register('service-worker.js')
        .then(registration => {
          // Tu Service Worker está registrado correctamente
          console.log('Service Worker registrado correctamente: ', registration);

          // Verificar la resolución de pantalla para mostrar la notificación
          if (window.matchMedia('(max-width: 768px)').matches) {
            // Muestra la notificación de "Agregar a pantalla de inicio"
            // Puedes usar el método 'beforeinstallprompt' o alguna otra lógica para mostrar la notificación adecuadamente
          }
        })
        .catch(error => {
          // Ocurrió un error al registrar el Service Worker
          console.error('Error al registrar el Service Worker: ', error);
        });
    }
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/en" element={<LandingEN />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
