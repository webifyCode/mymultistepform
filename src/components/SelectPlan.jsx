import React from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import "../styles/SelectPlan.css";
import { PLANS, cycleSuffix } from "../data";

const PLAN_ICONS = { arcade: arcadeIcon, advanced: advancedIcon, pro: proIcon };

const SelectPlan = ({ formData, setFormData, planPrices, errors, setErrors }) => {
  function chooseCycle(e) {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  function choosePlan(id) {
    setFormData((oldData) => ({ ...oldData, plan: id }));
    setErrors((oldErrors) => ({ ...oldErrors, plan: "" }));
  }

  return (
    <>
      <h1 className="title">Select your plan</h1>
      <p className="blurb">You have the option of monthly or yearly billing.</p>

      <div className="plans">
        {PLANS.map(({ id, label }) => (
          <div
            key={id}
            className={`plan ${formData.plan === id ? "selected" : ""}`}
            id={id}
            role="button"
            tabIndex={0}
            aria-pressed={formData.plan === id}
            onClick={() => choosePlan(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                choosePlan(id);
              }
            }}
          >
            <img src={PLAN_ICONS[id]} alt="" />
            <div className="plan-details">
              <strong>{label}</strong>
              <span>
                ${planPrices[formData.cycle][id]}/{cycleSuffix(formData.cycle)}
              </span>
              {formData.cycle === "yearly" ? (
                <div className="promo">2 months free</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      {errors.plan && (
        <span className="error" role="alert">
          {errors.plan}
        </span>
      )}

      <div className="cycle-toggle-container">
        <label
          className={`monthly-label ${
            formData.cycle === "monthly" ? "toggled" : ""
          }`}
          htmlFor="monthly"
        >
          Monthly
          <input
            onChange={chooseCycle}
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
            onChange={chooseCycle}
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
