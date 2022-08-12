import React from 'react';
import { useEffect, useState } from "react";

function Restaurants(props) {

    const restaurantList = [

        {   id: 1,
            name: "Shtastliveca",
            image: "/images/ali-inay-unsplash.jpg",
            type: "Restaurant"
        },
        {
            id: 2,
            name: "Raketa Rakia Bar",
            image: "/images/nick-karvounis-unsplash.jpg",
            type: "Bar"
        },
        { 
            id: 3,
            name: "Vino Vino",
            image: "/images/jay-wennington-unsplash.jpg",
            type: "Restaurant"
        },
        {
            id: 4,
            name: "Spice House",
            image: "/images/ali-inay-unsplash.jpg",
            type: "Restaurant"
        },
        {
            id: 5,
            name: "Boom! Burgers",
            image: "/images/nick-karvounis-unsplash.jpg",
            type: "Fast food"
        },
        {
            id: 6,
            name: "Street Chefs",
            image: "/images/jay-wennington-unsplash.jpg",
            type: "Fast food"
        },
        {
            id: 7,
            name: "Fabrika Daga",
            image: "/images/ali-inay-unsplash.jpg",
            type: "Fast food"
        },
        {
            id: 8,
            name: "Farmer’s",
            image: "/images/nick-karvounis-unsplash.jpg",
            type: "Fast food"
        },
        {
            id: 9,
            name: "The Little Things",
            image: "/images/jay-wennington-unsplash.jpg",
            type: "Restaurant"
        },
        {
            id: 10,
            name: "STAGE Bar",
            image: "/images/ali-inay-unsplash.jpg",
            type: "Bar"
        },
        {
            id: 11,
            name: "Swing",
            image: "/images/nick-karvounis-unsplash.jpg",
            type: "Bar"
        },
        {
            id: 12,
            name: "Bar Billiard",
            image: "/images/jay-wennington-unsplash.jpg",
            type: "Bar"
        }
    ];

    const [filteredList, setFilteredList] = useState(restaurantList);
    const [selectedType, setSelectedType] = useState();
    const [search, setNewSearch] = useState("");

    const filterByType = (filteredData) => {
        
      if (!selectedType) {
        return filteredData;
      }
  
      const filteredItems = filteredData.filter(
        (item) => item.type === selectedType
      );
      return filteredItems;
    };

    const handleSearchChange = (e) => {
      setNewSearch(e.target.value);
    };

    const searched = !search
    ? restaurantList
    : restaurantList.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
      );

    const handleTypeChange = (event) => {
      const inputType = Number(event.target.id);
    
      if (inputType === selectedType) {
        setSelectedType("");
      } 
      else {
        setSelectedType(inputType);
      }
    };

    useEffect(() => {
        let filteredData = filterByType(restaurantList);
        filteredData = filterByType(filteredData);
        setFilteredList(filteredData);
      }, 
      [selectedType]);

    return (
        <>
          <div className='searchbar'>
            <input 
              type="text" 
              placeholder="Search Restaurants"
              value={search} 
              onChange={handleSearchChange}/>
          </div>
          <div className="filter-restaurants">
              <div>Filter by Type</div>
              <div id="type-options" onClick={handleTypeChange}>
                <div
                  className={selectedType === "Restaurant" ? "active-option" : "filter-option"}
                  id="2018"
                >
                  Restaurant
                </div>
                <div
                  className={selectedType === "Bar" ? "active-option" : "filter-option"}
                  id="2019"
                >
                  Bar
                </div>
                <div
                  className={selectedType === "Fast food" ? "active-option" : "filter-option"}
                  id="2020"
                >
                  Fast food
                </div>
              </div>

              <div id="resto-list">
                  {searched.map((item, index) => (
                  <div className="resto-item" key={index}>
                    <div className="resto-name">{`Name: ${item.name}`}</div>
                    <div className="resto-type">{`Type: ${item.type}`}</div>
                    <img className="resto-image" src={item.image} alt="resto-img" />
                  </div>
                  ))}
              </div>
          </div>
        </>
    )
}

export default Restaurants