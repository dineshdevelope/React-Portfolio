import React from "react";
import MainCard from "./components/MainCard";
import { Routes, Route } from "react-router-dom";
import FrontendWork from "./pages/FrontendWork";
import BackendWork from "./pages/BackendWork";
import FullStackWork from "./pages/FullStackWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainCard />} />
        <Route path="/frontend" element={<FrontendWork />} />
        <Route path="/backend" element={<BackendWork />} />
        <Route path="/fullstack" element={<FullStackWork />} />
      </Routes>
    </>
  );
}

export default App;
