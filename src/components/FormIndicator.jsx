import React from "react";
import "../styles/FormIndicator.css";

const FormIndicator = ({ currentPage }) => {
  const selectedIndicator = {
    backgroundColor: "hsl(206, 94%, 87%)",
    color: "hsl(213, 96%, 18%)",
    border: "1px solid hsl(206, 94%, 87%)",
  };

  return (
    <div className="sidebar-container">
      <div className="indicator-container">
        <span
          className="indicator-indicator"
          style={currentPage === "personalInfo" ? selectedIndicator : null}
        >
          1
        </span>
        <div className="indicator-text">
          <h5>STEP 1</h5>
          <h4>YOUR INFO</h4>
        </div>
      </div>
      <div className="indicator-container">
        <span
          className="indicator-indicator"
          style={currentPage === "selectPlan" ? selectedIndicator : null}
        >
          2
        </span>
        <div className="indicator-text">
          <h5>STEP 2</h5>
          <h4>SELECT PLAN</h4>
        </div>
      </div>
      <div className="indicator-container">
        <span
          className="indicator-indicator"
          style={currentPage === "addOns" ? selectedIndicator : null}
        >
          3
        </span>
        <div className="indicator-text">
          <h5>STEP 3</h5>
          <h4>ADD-ONS</h4>
        </div>
      </div>
      <div className="indicator-container">
        <span
          className="indicator-indicator"
          style={currentPage === "finishingUp" || currentPage === "thanks" ? selectedIndicator : null}
        >
          4
        </span>
        <div className="indicator-text">
          <h5>STEP 4</h5>
          <h4>SUMMARY</h4>
        </div>
      </div>
    </div>
  );
};

export default FormIndicator;
