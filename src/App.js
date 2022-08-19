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

function App() {
  return (
    <>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index />
                  <Route path="/articles" element={<Articles />}/>
                  <Route path="/articles/:slug" element={<SingleArticle/>} />
              </Route>        
          </Routes>
    </>
    
)
}

function Layout() {
  return(
      <div className="flex flex-wrap min-h-screen">       
        <section className="w-full">    
            <Outlet />
        </section>
      </div>
  )
}
