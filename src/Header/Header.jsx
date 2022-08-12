import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <p>Logo</p>
        <nav className='navigation-menu'>
            <ul>
              <li>Trending</li>
              <li>Resources</li>
              <li>Nearby</li>
              <li>Hackathons</li>
              <li>FAQ</li>
            </ul>
            <button>Download App</button>
        </nav>
    </div>
  )
}

export default Header