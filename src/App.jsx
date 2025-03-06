import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Women_product from "./Pages/Women_product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women_product" element={<Women_product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;