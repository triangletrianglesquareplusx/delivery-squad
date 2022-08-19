import React from 'react';
import './Restaurants.css';
import { Routes, Route , Outlet } from "react-router-dom";
import Articles from './Pages/Articles';
import SingleArticle from './Pages/SingleArticle';
import RestaurantsFullPage from './Pages/RestaurantsFullPage';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'

export default function App() {
  return (
    <>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/articles/:slug" element={<SingleArticle/>} />
            <Route path="/restaurants" element={<RestaurantsFullPage/>}/>
            
          </Routes>
          
          <Footer/>
    </>
  );
}

