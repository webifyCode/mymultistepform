import React from "react";
import "../styles/AddOns.css";

const AddOns = ({ formData, setFormData, addOnPrices }) => {
  function toggleAddOns(e) {
    const target = e.currentTarget;
    const name = target.getAttribute("name");

    setFormData((oldData) => {
      const exists = oldData.addOns.includes(name);
      if (exists) {
        return { ...oldData, addOns: oldData.addOns.filter((a) => a !== name) };
      }
      return { ...oldData, addOns: [...oldData.addOns, name] };
    });
  }
  return (
    <>
      <h1 className="title">Pick add-ons</h1>
      <p className="blurb">Add-ons help enhance your gaming experience.</p>
      <label
        htmlFor="online-service"
        className={`add-on-label ${
          formData.addOns.includes("online service") ? "selected" : ""
        }`}
      >
        <input
          onChange={(e) => {
            toggleAddOns(e);
          }}
          className="add-on"
          type="checkbox"
          name="online service"
          id="online-service"
          checked={formData.addOns.includes("online service")}
        />
        <span className="checkbox"></span>
        <span>
          <strong>Online service</strong>
          <p>Access to multiplayer games</p>
        </span>
        <span>
          +
          {formData.cycle === "monthly"
            ? `$${addOnPrices.monthly["online service"]}/mo`
            : ` $${addOnPrices.yearly["online service"]}/yr`}
        </span>
      </label>
      <label
        htmlFor="larger-storage"
        className={`add-on-label ${
          formData.addOns.includes("larger storage") ? "selected" : ""
        }`}
      >
        <input
          onChange={(e) => {
            toggleAddOns(e);
          }}
          className="add-on"
          type="checkbox"
          name="larger storage"
          id="larger-storage"
          checked={formData.addOns.includes("larger storage")}
        />
        <span className="checkbox"></span>
        <span>
          <strong>Larger storage</strong>
          <p>Extra 1TB of cloud save</p>
        </span>
        <span>
          +
          {formData.cycle === "monthly"
            ? `$${addOnPrices.monthly["larger storage"]}/mo`
            : ` $${addOnPrices.yearly["larger storage"]}/yr`}
        </span>
      </label>
      <label
        htmlFor="customize-profile"
        className={`add-on-label ${
          formData.addOns.includes("customizable profile") ? "selected" : ""
        }`}
      >
        <input
          onChange={(e) => {
            toggleAddOns(e);
          }}
          className="add-on"
          type="checkbox"
          name="customizable profile"
          id="customize-profile"
          checked={formData.addOns.includes("customizable profile")}
        />
        <span className="checkbox"></span>
        <span>
          <strong>Customizable profile</strong>
          <p>Custom theme on your profile</p>
        </span>
        <span>
          +
          {formData.cycle === "monthly"
            ? `$${addOnPrices.monthly["customizable profile"]}/mo`
            : ` $${addOnPrices.yearly["customizable profile"]}/yr`}
        </span>
      </label>
    </>
  );
};

export default AddOns;
