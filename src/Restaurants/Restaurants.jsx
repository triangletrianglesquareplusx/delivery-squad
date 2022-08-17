import React from 'react';
// import RestaurantData from '../Data/RestaurantData.json';
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import { useState, useEffect } from 'react';
import BacktoTopButton from '../BacktoTopButton/BacktoTopButton';
// import '../App.css';

function Restaurants(props) {

  const [RestaurantCards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
    .then((res) => res.json())
    .then((data) => setCards(data));
  }, []);

  return (
      <>
        <div className="restaurants-container">
            {RestaurantCards.map((card) => 
            <RestaurantCard data={card} key={card.id} />
            )}
        </div>
        <BacktoTopButton />
      </>
  )
}

export default Restaurants