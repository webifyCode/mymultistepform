import React from "react";

const Back = ({ onPrev }) => {
  return (
    <button className="back" onClick={() => onPrev()}>
      Go Back
    </button>
  );
};

export default Back;
