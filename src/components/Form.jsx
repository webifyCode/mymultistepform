import React, { useState } from "react";
import FormIndicator from "./FormIndicator";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import Thanks from "./Thanks";
import Continue from "./Continue";
import Back from "./Back";
import { validateField } from "../validation";
import { PLAN_PRICES, ADD_ON_PRICES, PAGE_ORDER } from "../data";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    cycle: "monthly",
    addOns: [],
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
      />
    ),
    selectPlan: (
      <SelectPlan
        formData={formData}
        setFormData={setFormData}
        planPrices={PLAN_PRICES}
        errors={errors}
        setErrors={setErrors}
      />
    ),
    addOns: (
      <AddOns
        formData={formData}
        setFormData={setFormData}
        addOnPrices={ADD_ON_PRICES}
      />
    ),
    finishingUp: (
      <FinishingUp
        formData={formData}
        planPrices={PLAN_PRICES}
        addOnPrices={ADD_ON_PRICES}
        setCurrentPage={() => setCurrentPage("selectPlan")}
      />
    ),
    thanks: <Thanks />,
  };

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

    const currentIndex = PAGE_ORDER.indexOf(currentPage);

    if (currentPage === "selectPlan" && formData.plan === "") {
      errorsFound.plan = "Please select a plan";
    }

    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound);
      return;
    }
    setErrors({});
    if (currentIndex < PAGE_ORDER.length - 1) {
      setCurrentPage(PAGE_ORDER[currentIndex + 1]);
    }
  }

  function prevStep() {
    const currentIndex = PAGE_ORDER.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(PAGE_ORDER[currentIndex - 1]);
    }
  }

  // The same buttons are rendered twice: inside the form on large screens and
  // below it on mobile (CSS shows one at a time).
  const buttons = (className) =>
    currentPage !== "thanks" && (
      <div className={`buttons-container ${className}`}>
        {currentPage !== "personalInfo" && <Back onPrev={prevStep} />}
        <Continue currentPage={currentPage} onNext={nextPage} />
      </div>
    );

  return (
    <div className="form-container">
      <FormIndicator currentPage={currentPage}></FormIndicator>
      
      <form onSubmit={(e) => e.preventDefault()} action="" noValidate>
        {pages[currentPage]}

        {buttons("buttons-large")}
      </form>
          
      {buttons("buttons-mobile")}
    </div>
  );
};

export default Form;
