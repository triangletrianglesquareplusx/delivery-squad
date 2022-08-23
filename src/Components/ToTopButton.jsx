import React from "react";
import buttonLogo from "../Resources/Button.svg";

function ToTopButton() {
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className="border-2 border-t-emerald-400 border-solid bg-emerald-200 rounded-2xl w-20"
    >
      To Top
    </button>
  );
}

export default ToTopButton;
