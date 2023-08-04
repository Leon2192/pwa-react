import React, { useEffect } from "react";
import LandingEN from "./components/LandingEN";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react"; // Cambia la importación aquí

function App() {

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
