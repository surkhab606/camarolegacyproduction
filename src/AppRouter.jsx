import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage  from "./HomePage";
import CamaroPage from "./CamaroPage";
import React from 'react';

function AppRouter() {
    return (
         <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/camaro/:year" element={<CamaroPage />}/>
         </Routes>
    );
}

export default AppRouter;