import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Home from "./components/Home";
import Static from "./components/Static";
import Fav_page from "./components/Fav_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing_page />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="static" element={<Static />}></Route>
      <Route path="fav" element={<Fav_page />}></Route>
    </Routes>
  );
}
export default App;
