import React, { useState } from "react";

const FancyButton = ({ toggleVisibility }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  return (
    <div className="wrap">
      <div className="box">
        <button
          onClick={toggleVisibility}
          className={`cta ${isActive ? "active" : ""}`}
          onMouseEnter={handleHover}
        >
          <span className="shape flex items-center justify-center">
            Bana Ulaşın
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FancyButton;
