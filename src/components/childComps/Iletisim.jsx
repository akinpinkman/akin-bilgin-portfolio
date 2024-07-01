import React, { useState, useEffect, useRef } from "react";
import { IletisimBox } from "./IletisimBox";
import FancyButton from "./FancyButton";

export function Iletisim() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeBox();
      }
    };

    if (isButtonActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isButtonActive]);

  const toggleVisibility = () => {
    setIsButtonActive(!isButtonActive);
    document.body.style.overflow = isButtonActive ? "auto" : "hidden";
  };

  const closeBox = () => {
    setIsButtonActive(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="pt-20">
      {!isButtonActive && <FancyButton toggleVisibility={toggleVisibility} />}
      {isButtonActive && (
        <div ref={ref}>
          <IletisimBox closeBox={closeBox} />
        </div>
      )}
    </div>
  );
}
