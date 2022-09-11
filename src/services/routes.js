import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Home from "../Components/Pages/Home/Home";
import Dogs from "../Components/Pages/Dogs/Dogs";
import NotFound from "../Components/Pages/NotFound/NotFound"

export default function Ways(){
    
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="dogpage" element={<Dogs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}