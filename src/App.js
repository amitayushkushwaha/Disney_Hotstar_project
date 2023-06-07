import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Movie_card from "./components/Movie_card";

import Home from "./components/Home";
import Static from "./components/Static";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing_page />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="static" element={<Static />}></Route>
    </Routes>
  );
}
export default App;
