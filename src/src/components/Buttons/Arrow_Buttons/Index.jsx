import React from "react";
import "./style.css"
const Index = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="swiper-button custom-button-prev">
        {children}
      </button>
    </div>
  );
};

export default Index;
