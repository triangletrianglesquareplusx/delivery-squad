import React from 'react';
import './Restaurants.css';
import FilterSortBand from './Components/FilterSortBand/FilterSortBand';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import Restaurants from './Pages/Restaurants/Restaurants';
import Searchbar from './Components/Searchbar/Searchbar';
import { Routes, Route , Outlet } from "react-router-dom";
import Articles from './Pages/Articles';
import SingleArticle from './Pages/SingleArticle';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'

export default function App() {
  return (
    <>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            
            
          </Routes>
          
          <Footer/>
    </>
  );
}

