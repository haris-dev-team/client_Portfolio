import React from "react";
import "./style.css";
const Index = ({ front, back, onclick, type }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className="btn"
        data-back={front}
        data-front={back}
        type={type}
      >
        <span className="front">{front}</span>
        <span className="back">{back}</span>
      </button>
    </div>
  );
};

export default Index;
