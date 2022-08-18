import React from 'react';
import { useEffect, useState } from 'react';
import arrowResto from '../../Assets/upwards-arrow-resto.png';

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
    <div className="flex flex-row items-center backtop-container">
        <button className="top-icon pointer" onClick={scrollToTop}>
            <img src={arrowResto} alt="back to top icon" />
        </button>
        <p className="h-8 not-italic font-semibold text-red-500">Back to Top</p>
    </div>
  )
}

export default BacktoTopButton