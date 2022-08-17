import React from 'react'

function BacktoTopButton() {
  return (
    <div className="backtop-container">
        <button className="top-icon">
            <img src="/images/chevron-upwards-arrow.png" alt="back to top icon" />
        </button>
        <p>Back to Top</p>
    </div>
  )
}

export default BacktoTopButton