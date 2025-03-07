import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Women_product from "./Pages/Women_product";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women_product" element={<Women_product />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;