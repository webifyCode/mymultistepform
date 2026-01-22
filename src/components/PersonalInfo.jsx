import React from "react";
import "../styles/PersonalInfo.css";

const PersonalInfo = ({
  formData,
  setFormData,
  errors,
  setErrors,
  validator,
}) => {
  function change(e) {
    let { name, value } = e.target;
    const errorsFound = {};

    setFormData((oldData) => {
      return { ...oldData, [name]: value };
    });

    const errorMessage = validator(name, value);
    if (errorMessage) {
      errorsFound[name] = errorMessage;
    }
    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound);
    } else {
      setErrors({});
    }
  }

  const errorStyle = { border: "2px solid hsl(354, 84%, 57%)" };

  return (
    <>
      <h1 className="title">Personal info</h1>
      <p className="blurb">
        Please provide your name, email address, and phone number.
      </p>
      <div className="inputs-container">
        <h4> Name</h4>
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={formData.name}
          onChange={(e) => {
            change(e);
          }}
          style={errors.name ? errorStyle : null}
        />
        <div className="error"></div>
        <h4> Email Address</h4>
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={formData.email}
          onChange={(e) => {
            change(e);
          }}
          style={errors.email ? errorStyle : null}
        />
        <h4> Phone Number </h4>
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={formData.phone}
          onChange={(e) => {
            change(e);
          }}
          style={errors.phone ? errorStyle : null}
        />
      </div>
    </>
  );
};

export default PersonalInfo;
