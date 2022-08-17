import React from 'react';
import './App.css';
import BacktoTopButton from './BacktoTopButton/BacktoTopButton';
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
      <BacktoTopButton />
      <Footer />
    </>
  );
}

export default App;
