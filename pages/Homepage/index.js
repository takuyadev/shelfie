import React, { useState } from "react";
import ConfirmButton from "../../comps/ConfirmButton";
import "./homepage.css";

const NameIcon = require("../../img/name.svg");
const LogoIcon = require("../../img/logo.svg");

const Homepage = () => {
  const [buttonClass, setButtonClass] = useState("confirmButton_box");

  return(
  <div className="app homepage">
    <img src={NameIcon} className="nameIcon" />
    <p className="subheading">
      Extend shelf life! <br/> Save the world and your wallet!
    </p>
    <p className="titleText">
      Find out how long your produce <br></br> will last, and how to reduce{" "}
      <br></br>your food waste!
    </p>
    <img className="logo" src={LogoIcon} />
    <ConfirmButton text="About the App" link="../Tutorial" className="aboutButton_box"/>
    <ConfirmButton text="Get Started!" link="../Seasons" className={buttonClass}  />
  </div>
  )
};

export default Homepage;
