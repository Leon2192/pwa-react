import React from "react";
import Landing from "./components/Landing";
import LandingEN from "./components/LandingEN";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/en" element={<LandingEN />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
