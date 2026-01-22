import React from "react";
import thanksIcon from "../assets/images/icon-thank-you.svg";
import "../styles/Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks-page">
      <img className="thanks-icon" src={thanksIcon} alt="thank-you" />
      <h1 className="title">Thank You!</h1>
      <p className="blurb">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Thanks;
