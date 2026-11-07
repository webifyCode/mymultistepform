import React from "react";
import "../styles/FinishingUp.css";
import { cycleSuffix } from "../data";

const FinishingUp = ({ formData, planPrices, addOnPrices, setCurrentPage }) => {
  const planCost = planPrices?.[formData.cycle]?.[formData.plan] ?? 0;
  const addOnsTotal = (formData.addOns ?? []).reduce(
    (total, addOn) => total + (addOnPrices?.[formData.cycle]?.[addOn] ?? 0),
    0,
  );
  const total = planCost + addOnsTotal;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <h1 className="title">Finishing up</h1>
      <p className="blurb">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary">
        <div className="plan-summary">
          <span className="summary-plan">
            <h3>
              {capitalize(formData.plan)} (
              {formData.cycle === "monthly" ? "Monthly" : "Yearly"})
            </h3>
            <a
              href="#"
              className="change"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage();
              }}
            >
              Change
            </a>
          </span>
          <span className="plan-price">
            {formData.plan ? `$${planCost}/${cycleSuffix(formData.cycle)}` : "$0"}
          </span>
        </div>
        <hr />
        <div className="addons-summary">
          {formData.addOns && formData.addOns.length > 0
            ? formData.addOns.map((addOn) => (
                <div className="addon" key={addOn}>
                  <span className="addon-name">{capitalize(addOn)}</span>
                  <span className="addon-price">
                    {`+$${addOnPrices[formData.cycle][addOn] ?? 0}/${cycleSuffix(formData.cycle)}`}
                  </span>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="total">
        <span className="total-text">
          Total (per {formData.cycle === "monthly" ? "month" : "year"})
        </span>
        <span className="total-price">
          {formData.plan ? `$${total}/${cycleSuffix(formData.cycle)}` : "$0"}
        </span>
      </div>
    </>
  );
};

export default FinishingUp;
