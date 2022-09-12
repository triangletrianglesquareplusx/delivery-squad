import React from 'react';
import RestaurantCard from '../Components/RestaurantCard/RestaurantCard';
import BacktoTopButton from '../Utilities/BacktoTopButton/BacktoTopButton';
import filterIcon from '../Assets/filter-resto.png';
import sortIcon from '../Assets/sort-resto.png';
import { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore'; 


function Restaurants(props) {

  const [restaurants, setRestaurants] = useState([]);
  const [firstOptions, setFirstOptions] = useState(false);
  const [secondOptions, setSecondOptions] = useState(false);
  const [thirdOptions, setThirdOptions] = useState(false);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const restaurantsCollectionRef = collection(db, "restaurants");
  
  
  // const sortByRating = () => {
  //   setSorted({ sorted: "rating", reversed: !sorted.reversed });
  //   const restosCopy = [...restaurants];
  //   restosCopy.sort((restoA, restoB) => {
  //     if(sorted.reversed) {
  //       return restoA.rating - restoB.rating;
  //     }
  //     return restoB.rating - restoA.rating;
  //   });
  //   setRestaurants(restosCopy);
  // };
  
  // const sortByDistance = () => {
  //   setSorted({ sorted: "distance", reversed: !sorted.reversed });
  //   const restosCopy = [...restaurants];
  //   restosCopy.sort((restoA, restoB) => {
  //     if(sorted.reversed) {
  //       return restoA.distance - restoB.distance;
  //     }
  //     return restoB.distance - restoA.distance;
  //   });
  //   setRestaurants(restosCopy);
  // };

  const handleClick = () => {
    setFirstOptions(!firstOptions);
  };

  const handleClick2 = () => {
    setSecondOptions(!secondOptions);
  };
  
  const handleClick3 = () => {
    setThirdOptions(!thirdOptions);
  };
  
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await getDocs(restaurantsCollectionRef);
    setRestaurants(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };
  
  // useEffect(() => {
  //   let isMounted = true;
  
  //   const doFetch = async () => {
  //     const querySnapshot = await getDocs(restaurantsCollectionRef);
  //     const arr = [];
  //     querySnapshot.forEach((doc) => {
  //       arr.push({
  //         ...doc.data(),
  //         id: doc.id,
  //       });
  //       if (isMounted) setRestaurants(arr);
  //     });
  //   };
  
  //   doFetch() // start the async work
  //     .catch((err) => {
  //       if (!isMounted) return; // unmounted, ignore.
  //       // TODO: Handle errors in your component
  //       console.error("Failed to fetch data", err);
  //     });
  
  //   return () => {
  //     isMounted = false;
  //   };
    
  // }, []);
  
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
                  <input id="type-checkbox-list" type="checkbox" value="Restaurant" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="type-checkbox-list" className="py-2 ml-2 text-sm font-semibold">Restaurant</label>
                </div>
              </li>
              <li>
                <div className="flex items-center pl-3">
                  <input id="type-checkbox-list" type="checkbox" value="Bar" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
              <button onClick={handleClick} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" value="rating" type="button">Ratings</button>
                {firstOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-1/3 top-2/3 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1 bg-gray-200" role="none">
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-0">All</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-1">Ascending</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-2">Descending</a>
                  </div>
                </div>)}
                <button onClick={handleClick2} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" type="button">Cost</button>
                {secondOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-80 top-2/3 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1 bg-gray-200" role="none">
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-0">All</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-1">Ascending</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-2">Descending</a>
                  </div>
                </div>)}
                <button onClick={handleClick3} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" value="distance">Distance</button>
                {thirdOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-60 top-2/3 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1 bg-gray-200" role="none">
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-0">All</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-1">Ascending</a>
                    <a href="/" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-2">Descending</a>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between w-4/5 ml-20 mt-14 restaurants-container">
          {restaurants  
            .map((resto) => (
          <RestaurantCard 
           key={resto.id}
           name={resto.name}
           rating={resto.rating}
           reservation={resto.reservation}
           source={resto.imgUrl}
           distance={resto.distance}
          />
          ))}
        </div>
        <BacktoTopButton />
      </>
  )
}

export default Restaurants
