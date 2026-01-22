import React from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import "../styles/SelectPlan.css";

const SelectPlan = ({ formData, setFormData, planPrices }) => {
  function chooseCycle(e) {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  function choosePlan(e) {
    const target = e.currentTarget;
    const name = target.getAttribute("name");
    const value = target.getAttribute("value");
    setFormData((oldData) => {
      return { ...oldData, [name]: value };
    });
  }

  return (
    <>
      <h1 className="title">Select your plan</h1>
      <p className="blurb">You have the option of monthly or yearly billing.</p>

      <div className="plans">
        <div
          className={`plan ${formData.plan === "arcade" ? "selected" : ""}`}
          name="plan"
          value="arcade"
          id="arcade"
          onClick={(e) => {
            choosePlan(e);
          }}
        >
          <img src={arcadeIcon} alt="arcade-icon" />
          <div className="plan-details">
          <strong>Arcade</strong>
          <span>
            $
            {formData.cycle === "yearly"
              ? `${planPrices.yearly.arcade}/yr`
              : `${planPrices.monthly.arcade}/mo`}
          </span>
          {formData.cycle === "yearly" ? (
            <div className="promo">2 months free</div>
          ) : null}
          </div>
        </div>
        <div
          className={`plan ${formData.plan === "advanced" ? "selected" : ""}`}
          name="plan"
          value="advanced"
          id="advanced"
          onClick={(e) => {
            choosePlan(e);
          }}
        >
          <img src={advancedIcon} alt="advanced-icon" />
          <div className="plan-details">

          <strong>Advanced</strong>
          <span>
            $
            {formData.cycle === "yearly"
              ? `${planPrices.yearly.advanced}/yr`
              : `${planPrices.monthly.advanced}/mo`}
          </span>
          {formData.cycle === "yearly" ? (
            <div className="promo">2 months free</div>
          ) : null}
          </div>
        </div>
        <div
          className={`plan ${formData.plan === "pro" ? "selected" : ""}`}
          name="plan"
          value="pro"
          id="pro"
          onClick={(e) => {
            choosePlan(e);
          }}
        >
          <img src={proIcon} alt="pro-icon" />
          <div className="plan-details">

          <strong>Pro</strong>
          <span>
            $
            {formData.cycle === "yearly"
              ? `${planPrices.yearly.pro}/yr`
              : `${planPrices.monthly.pro}/mo`}
          </span>
          {formData.cycle === "yearly" ? (
            <div className="promo">2 months free</div>
          ) : null}
          </div>
        </div>
      </div>

      <div className="cycle-toggle-container">
        <label
          className={`monthly-label ${
            formData.cycle === "monthly" ? "toggled" : ""
          }`}
          htmlFor="monthly"
        >
          Monthly
          <input
            onChange={(e) => {
              chooseCycle(e);
            }}
            className="cycle"
            type="radio"
            name="cycle"
            id="monthly"
            value="monthly"
            checked={formData.cycle === "monthly"}
          />
        </label>
        <div
          className={`switch-container ${
            formData.cycle === "yearly" ? "yearly-selected" : ""
          }`}
        >
          <div className="switch"></div>
        </div>
        <label
          className={`yearly-label ${
            formData.cycle === "yearly" ? "toggled" : ""
          }`}
          htmlFor="yearly"
        >
          Yearly
          <input
            onChange={(e) => {
              chooseCycle(e);
            }}
            className="cycle"
            type="radio"
            name="cycle"
            id="yearly"
            value="yearly"
            checked={formData.cycle === "yearly"}
          />
        </label>
      </div>
    </>
  );
};

export default SelectPlan;
