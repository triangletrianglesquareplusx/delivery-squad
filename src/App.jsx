import React from 'react';
import './Restaurants.css';
import FilterSortBand from './Components/FilterSortBand/FilterSortBand';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import Restaurants from './Pages/Restaurants/Restaurants';
import Searchbar from './Components/Searchbar/Searchbar';

function App() {
  return (
    <>
      <MiddleSection />
      <Searchbar />
      <FilterSortBand />
      <Restaurants />
    </>
  );
}

export default App;
