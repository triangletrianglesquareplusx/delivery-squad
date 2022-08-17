import React from 'react';
import { useEffect, useState } from 'react';

function BacktoTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (  
    <div className="backtop-container">
        <button className="top-icon" onClick={scrollToTop}>
            <img src="/images/chevron-upwards-arrow.png" alt="back to top icon" />
        </button>
        <p>Back to Top</p>
    </div>
  )
}

export default BacktoTopButton