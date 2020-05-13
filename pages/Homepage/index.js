import React from "react";
import ConfirmButton from "../../comps/ConfirmButton";
import "./homepage.css";

const NameIcon = require("../../img/name.svg");
const LogoIcon = require("../../img/logo.svg");

const Homepage = () => (
  
  
  <div className="app">
    <img src={NameIcon} className="nameIcon" />
    <p className="subheading">
      Extend shelf life. <br></br>Save the world and your wallet!
    </p>
    <p className="titleText">
      Find our how long your produce <br></br> will last, and how to reduce{" "}
      <br></br>your food waste!
    </p>
    <img className="logo" src={LogoIcon} />
    <ConfirmButton text="Get Started!" link="../Seasons" color="FFA15C"  />
  </div>
  
);

export default Homepage;
