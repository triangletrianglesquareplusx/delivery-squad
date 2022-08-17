import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <p>Logo</p>
        <div className='navigation-menu'>
          <nav>
              <ul>
                <li>Trending</li>
                <li>Resources</li>
                <li>Nearby</li>
                <li>Hackathons</li>
                <li>FAQ</li>
              </ul>
          </nav>
          <button>Download App</button>
        </div>
    </div>
  )
}

export default Header