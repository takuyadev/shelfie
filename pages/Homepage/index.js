import React, { useState } from "react";
import ConfirmButton from "../../comps/ConfirmButton";
import "./homepage.css";

const NameIcon = require("../../img/name.svg");
const LogoIcon = require("../../img/logo.svg");

const Homepage = () => {
  const [buttonClass, setButtonClass] = useState("confirmButton_box");

  return(
  <div className="app">
    <img src={NameIcon} className="nameIcon" />
    <p className="subheading">
      Extend shelf life. <br></br><br></br>Save the world and your wallet!
    </p>
    <p className="titleText">
      Find our how long your produce <br></br> will last, and how to reduce{" "}
      <br></br>your food waste!
    </p>
    <img className="logo" src={LogoIcon} />
    <ConfirmButton text="Get Started!" link="../Seasons" className={buttonClass}  />
  </div>
  )
};

export default Homepage;
