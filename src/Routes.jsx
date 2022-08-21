import React from "react";

import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Sale from "./pages/Sale/Sale";
import Home from "./pages/Home";
import App from "./App";
import Login from "./Login/Login";
import Cadastros from "./pages/Cadastros/Cadastros";
import Carrossel from "./pages/Carrossel/Carrossel";

function UseRoutes() {
    return ( 
        <Router>
            <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/Home" element={<Home />} />
            <Route  path="/Sale" element={<Sale />} />
            <Route  path="/Cadastros" element={<Cadastros />} />
            <Route  path="/Livros" element={<Carrossel />} />


            </Routes>
            
        </Router>
        

    )
}

export default UseRoutes;