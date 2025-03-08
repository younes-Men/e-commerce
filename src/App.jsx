import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Women_product from "./Pages/Women_product";
import AccessoireMen_product from "./Pages/AccessoireMens_product";
import AccessoireWomens_product from "./Pages/AccessoireWomens_product";
import Men_product from "./Pages/Men_product";

import Login from "./Pages/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women_product" element={<Women_product />} />
        <Route path="/Men_product" element={<Men_product/>} />
        <Route  path="/AccessoireMen_product" element={<AccessoireMen_product/>} />
        <Route path="/AccessoireWomen_product" element={<AccessoireWomens_product/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;