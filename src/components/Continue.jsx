import React from "react";

const Continue = ({ currentPage, onNext }) => {
  return (
    <button
      className={`forward ${currentPage === "finishingUp" ? "last" : ""}`}
      onClick={() => onNext()}
    >
      {currentPage === "finishingUp" ? "Confirm" : "Next step"}
    </button>
  );
};

export default Continue;
