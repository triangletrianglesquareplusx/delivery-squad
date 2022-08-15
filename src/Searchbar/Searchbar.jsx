import React from 'react'

export default function Searchbar() {
  return (
    <div className="search-container">
      <div className='searchbar'>
        <img src="/images/search.png" alt="search icon" className="search-icon" />
        <input 
          type="text" 
          placeholder="Search Restaurants"
          // value={search} 
          // onChange={handleSearchChange}
          />
      </div>
    </div>
  )
}
