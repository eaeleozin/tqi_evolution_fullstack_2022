import React from "react";

import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Sale from "./pages/Sale";
import Home from "./pages/Home";
import App from "./App";

function UseRoutes() {
    return ( 
        <Router>
            <Routes>
            <Route  path="/" element={<App />} />
            <Route  path="/Home" element={<Home />} />
            <Route  path="/Sale" element={<Sale />} />
            </Routes>
        </Router>
        

    )
}

export default UseRoutes;