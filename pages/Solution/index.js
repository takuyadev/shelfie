import React from "react";
import Link from "next/link";
import Wave from "../../comps/wave";
import RestartButton from "../../comps/RestartButton";
import Text from "../../comps/Text";
import "./solution.css";
import LogoImage from "./LogoDesign.svg";

const Solution = () => (
  <div class="app">
    <div className="nav-button-layout">
      <p>Based on your selections, you have about:</p>
      <RestartButton></RestartButton>
    </div>
    <main>
      <h4>6 Days Left!</h4>
      <img src={LogoImage} />
      <br></br>
      <h6>
        How Long Does it Last <br></br>Under Best Conditions?
      </h6>
      <p class="solutionBox">
        explanation of how long the food should last under the best conditions
      </p>
      <h6>
        How to Preserve This Food <br></br>Longer?
      </h6>
      <p class="solutionBox">tips on how to preserve produce will go here</p>
      <h6>
        Misconceptions About <br></br>Expiration Dates
      </h6>
      <p class="solutionBox">Educational information will go here</p>
      <h6>Food Waste</h6>
      <p class="solutionBox">
        information about the amount of food is wasted, and encourage the user
        to make better food purchasing decisions
      </p>
    </main>
    <Wave></Wave>
  </div>
);

Text.defaultProps = {
  color: "#322D2D",
};

export default Solution;
