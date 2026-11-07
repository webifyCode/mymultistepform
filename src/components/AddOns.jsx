import React from "react";
import "../styles/AddOns.css";
import { ADD_ONS, cycleSuffix } from "../data";

const AddOns = ({ formData, setFormData, addOnPrices }) => {
  function toggleAddOn(name) {
    setFormData((oldData) => {
      const exists = oldData.addOns.includes(name);
      return {
        ...oldData,
        addOns: exists
          ? oldData.addOns.filter((a) => a !== name)
          : [...oldData.addOns, name],
      };
    });
  }

  return (
    <>
      <h1 className="title">Pick add-ons</h1>
      <p className="blurb">Add-ons help enhance your gaming experience.</p>
      {ADD_ONS.map(({ name, inputId, label, description }) => {
        const checked = formData.addOns.includes(name);
        return (
          <label
            key={name}
            htmlFor={inputId}
            className={`add-on-label ${checked ? "selected" : ""}`}
          >
            <input
              onChange={() => toggleAddOn(name)}
              className="add-on"
              type="checkbox"
              name={name}
              id={inputId}
              checked={checked}
            />
            <span className="checkbox"></span>
            <span>
              <strong>{label}</strong>
              <p>{description}</p>
            </span>
            <span>
              +${addOnPrices[formData.cycle][name]}/{cycleSuffix(formData.cycle)}
            </span>
          </label>
        );
      })}
    </>
  );
};

export default AddOns;
