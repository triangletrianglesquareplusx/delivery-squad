import React from 'react';

function FilterSortBand() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-7 filtersort-container">
      <div className="mr-16 bg-gray-200 h-9 filter-container w-80">
        <div className="flex flex-wrap items-center w-32 bg-purple-900 filterBy h-9">
          <img src={require("../../Assets/filter-resto.png")} alt="filter icon" className="filter-icon" />
          <p className="text-lg not-italic font-normal leading-5 text-white">Filter By</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start bg-gray-200 sort-container w-96 h-9">
        <div className="flex flex-wrap items-center w-32 bg-purple-900 sortBy">
          <img src={require("../../Assets/sort-resto.png")} alt="sort icon" className="sort-icon" />
          <p className="text-lg not-italic font-normal leading-5 text-white">Sort By</p>
        </div>
        <div className="flex flex-wrap items-center sort-categories">
          <button>Ratings</button>
          <button>Cost</button>
          <button>Distance</button>
        </div>
      </div>
    </div>
  )
}

export default FilterSortBand