import React, { useState } from "react";
import FormIndicator from "./FormIndicator";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import Thanks from "./Thanks";
import Continue from "./Continue";
import Back from "./Back";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    cycle: "monthly",
    addOns: [],
    total: 0,
  });

  const [planPrices, SETPLANPRICES] = useState({
    monthly: { arcade: 9, advanced: 12, pro: 15 },
    yearly: { arcade: 90, advanced: 120, pro: 150 },
  });

  const [addOnPrices, SETADDONPRICES] = useState({
    monthly: {
      "online service": 1,
      "larger storage": 2,
      "customizable profile": 2,
    },
    yearly: {
      "online service": 10,
      "larger storage": 20,
      "customizable profile": 20,
    },
  });

  const [currentPage, setCurrentPage] = useState("personalInfo");

  const [errors, setErrors] = useState({});

  const pages = {
    personalInfo: (
      <PersonalInfo
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        validator={validateField}
      />
    ),
    selectPlan: (
      <SelectPlan
        formData={formData}
        setFormData={setFormData}
        planPrices={planPrices}
      />
    ),
    addOns: (
      <AddOns
        formData={formData}
        setFormData={setFormData}
        addOnPrices={addOnPrices}
      />
    ),
    finishingUp: (
      <FinishingUp
        formData={formData}
        planPrices={planPrices}
        addOnPrices={addOnPrices}
        setCurrentPage={() => setCurrentPage("selectPlan")}
      />
    ),
    thanks: <Thanks />,
  };

  const pageOrder = [
    "personalInfo",
    "selectPlan",
    "addOns",
    "finishingUp",
    "thanks",
  ];

  function validateField(name, value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!value || value.trim() === "") {
      return "This field is required";
    }

    if (name === "email" && !emailRegex.test(value)) {
      return "Please enter a valid email";
    }

    if (name === "phone" && !phoneRegex.test(value)) {
      return "Please enter a valid phone number";
    }

    return "";
  }

  function nextPage() {
    const errorsFound = {};
    if (currentPage === "personalInfo") {
      const nameError = validateField("name", formData.name);
      const emailError = validateField("email", formData.email);
      const phoneError = validateField("phone", formData.phone);

      if (nameError) {
        errorsFound.name = nameError;
      }
      if (emailError) {
        errorsFound.email = emailError;
      }
      if (phoneError) {
        errorsFound.phone = phoneError;
      }
    }

    const currentIndex = pageOrder.indexOf(currentPage);

    if (currentPage === "selectPlan" && formData.plan === "") {
      errorsFound.plan = "Please select a plan";
    }

    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound);
      return;
    }
    setErrors({});
    if (currentIndex < pageOrder.length - 1) {
      setCurrentPage(pageOrder[currentIndex + 1]);
    }
  }

  function prevStep() {
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(pageOrder[currentIndex - 1]);
    }
  }

  return (
    <div className="form-container" role="main">
      <FormIndicator currentPage={currentPage}></FormIndicator>
      
      <form onSubmit={(e) => e.preventDefault()} action="" noValidate>
        {pages[currentPage]}

        <div className="buttons-container buttons-large">
          {currentPage !== "personalInfo" && currentPage !== "thanks" && (
            <Back onPrev={prevStep} />
          )}
          {currentPage !== "thanks" && (
            <Continue currentPage={currentPage} onNext={nextPage} />
          )}
        </div>
        
      </form>
          
          {currentPage !== "thanks" && (<div className="buttons-container buttons-mobile">
        {currentPage !== "personalInfo" && currentPage !== "thanks" && (
          <Back onPrev={prevStep} />
        )}
        {currentPage !== "thanks" && (
          <Continue currentPage={currentPage} onNext={nextPage} />
        )}
      </div>)}
      
    </div>
  );
};

export default Form;
