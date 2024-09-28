import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import MainCard from "./components/MainCard";
import { Routes, Route } from "react-router-dom";
import FrontendWork from "./pages/FrontendWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainCard />} />
        <Route path="/frontend" element={<FrontendWork />} />
      </Routes>
    </>
  );
}

export default App;
