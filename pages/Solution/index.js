import React from "react";
import Link from "next/link";
import Wave from "../../comps/wave";
import RestartButton from "../../comps/RestartButton";
import Text from "../../comps/Text";
import "./solution.css";
import LogoImage from "./LogoDesign.svg";
import { data, ChangeData } from "../../data";

const Solution = () => (
  <div class="app">
    <div class="navBar">
      <RestartButton></RestartButton>
    </div>
    <main>
      <h4>6 Days Left!</h4>
      <p>By all estimates, this food will last about 6 days under your selected  conditions </p>
      <img src={LogoImage} class="BananaMan"/>
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
    <Wave backgroundColor={data.Wave}/>
  </div>
);

Text.defaultProps = {
  color: "#322D2D",
};

export default Solution;
