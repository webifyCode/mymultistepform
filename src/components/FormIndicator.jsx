import React from "react";
import "../styles/FormIndicator.css";
import { STEPS } from "../data";

const selectedIndicator = {
  backgroundColor: "hsl(206, 94%, 87%)",
  color: "hsl(213, 96%, 18%)",
  border: "1px solid hsl(206, 94%, 87%)",
};

const FormIndicator = ({ currentPage }) => {
  return (
    <div className="sidebar-container">
      {STEPS.map((step, index) => (
        <div className="indicator-container" key={step.title}>
          <span
            className="indicator-indicator"
            style={step.pages.includes(currentPage) ? selectedIndicator : null}
          >
            {index + 1}
          </span>
          <div className="indicator-text">
            <h5>STEP {index + 1}</h5>
            <h4>{step.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormIndicator;
