import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/hotel";
import Login from "./pages/login/Login";
export default function App(){
    return(
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/login" element={<Login/>}/>
         </Routes>
         </BrowserRouter>
    )
}