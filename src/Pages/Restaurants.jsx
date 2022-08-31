import React from 'react';
import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';
import RestaurantCards from '../Data/RestaurantData';
import BacktoTopButton from '../Utilities/BacktoTopButton/BacktoTopButton';
import filterIcon from '../Assets/filter-resto.png';
import sortIcon from '../Assets/sort-resto.png';
import { useState } from 'react';

function Restaurants() {

  const [cards, setCards] = useState(RestaurantCards);
  const [sorting, sortCards] = useState("");

  const filterType = (e) => {
    const filterResult = RestaurantCards.filter(item => {
      return item.type === e.target.value;
    });
    
    setCards(filterResult);
  }

  const sortCategory = (e) => {
    const targetClicked = e.target.value;
      const sortResult = RestaurantCards.sort((a, b) => {
        return a[targetClicked] - b[targetClicked];
    });

    sortCards(sortResult);
  }
  
  return (
      <>
        <div className="flex flex-wrap items-center justify-center mt-7 filtersort-container">
          <div className="flex flex-wrap justify-start mr-16 bg-gray-200 rounded-lg shadow-xl h-9 filter-container w-72">
            <div className="flex flex-wrap items-center justify-center w-24 bg-purple-900 rounded-lg filterBy h-9">
              <img src={filterIcon} alt="filter icon" className="w-4 h-4 mr-1 filter-icon" />
              <p className="text-base not-italic font-normal leading-5 text-white">Filter By</p>
            </div>
            <ul className="flex flex-wrap flex-auto justify-evenly">
              <li>
                <div className="flex items-center pl-3">
                  <input onClick={filterType}  id="type-checkbox-list" type="checkbox" value="Restaurant" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="type-checkbox-list" className="py-2 ml-2 text-sm font-semibold">Restaurant</label>
                </div>
              </li>
              <li>
                <div className="flex items-center pl-3">
                  <input onClick={filterType} id="type-checkbox-list" type="checkbox" value="Bar" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="type-checkbox-list" className="py-2 ml-2 text-sm font-semibold">Bar</label>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap justify-start bg-gray-200 rounded-lg shadow-xl sort-container w-80 h-9">
            <div className="flex flex-wrap items-center justify-center w-24 bg-purple-900 rounded-lg sortBy">
              <img src={sortIcon} alt="sort icon" className="w-4 h-4 mr-1 sort-icon" />
              <p className="text-base not-italic font-normal leading-5 text-white">Sort By</p>
            </div>
            <div className="flex flex-wrap items-center flex-auto sort-categories justify-evenly">
              <button onClick={sortCategory} className="text-sm font-semibold" value="rating">Ratings</button>
              <button onClick={sortCategory} className="text-sm font-semibold">Cost</button>
              <button onClick={sortCategory} className="text-sm font-semibold">Distance</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between w-4/5 ml-20 mt-14 restaurants-container">
          {cards.map((card) => 
          <RestaurantCard data={card} key={card.id} />
          )}
        </div>
        <BacktoTopButton />
      </>
  )
}

export default Restaurants;
