import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MiddleSection from './MiddleSection/MiddleSection';
import Restaurants from './Restaurants/Restaurants';

function App() {
  return (
    <>
      <Header />
      <MiddleSection />
      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
