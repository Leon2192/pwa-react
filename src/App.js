import React from "react";
import Landing from "./components/Landing";
import LandingEN from "./components/LandingEN";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react"; // Cambia la importación aquí

function App() {
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
