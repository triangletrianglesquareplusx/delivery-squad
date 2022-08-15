import React from 'react';
import './App.css';
import FilterSortBand from './FilterSortBand/FilterSortBand';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MiddleSection from './MiddleSection/MiddleSection';
import Restaurants from './Restaurants/Restaurants';
import Searchbar from './Searchbar/Searchbar';

function App() {
  return (
    <>
      <Header />
      <MiddleSection />
      <Searchbar />
      <FilterSortBand />
      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
