import React from 'react';

function FilterSortBand() {
  return (
    <div className="filtersort-container">
      <div className="filter-container">
        <div className="filterBy">
          <img src="/images/filter.png" alt="filter icon" className="filter-icon" />
          <p>Filter By</p>
        </div>
      </div>
      <div className="sort-container">
        <div className="sortBy">
          <img src="/images/sort.png" alt="sort icon" className="sort-icon" />
          <p>Sort By</p>
        </div>
        <div className="sort-categories">
          <button>Ratings</button>
          <button>Cost</button>
          <button>Distance</button>
        </div>
      </div>
    </div>
  )
}

export default FilterSortBand