import React, { useState } from "react";
import Link from "next/link";
import Wave from "../../comps/wave";
import RestartButton from "../../comps/RestartButton";
import Text from "../../comps/Text";
import "./solution.css";
import LogoImage from "./LogoDesign.svg";
import { data, ChangeData, SolutionText } from "../../data";
import Textbox from "../../comps/Textbox";
console.log( SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[data.FruitorVegetable].Option[data.option])
console.log(data)

const Solution = () => {
  const [bestConditionText, setBestConditionText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[data.FruitorVegetable].Option[data.Option].Text
  );
  return (
    <div className="app">
      <div className="navBar">
        <RestartButton></RestartButton>
      </div>
      <main>
        <h4>{SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[data.FruitorVegetable].Option[data.Option].Days} Days Left!</h4>
        <p>
          By all estimates, this food will last about {SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[data.FruitorVegetable].Option[data.Option].Days} days under your selected
          conditions{" "}
        </p>
        <img src={LogoImage} className="BananaMan" />
        <br></br>
        <Textbox
          header="How Long Does it Last Under Best Conditions?"
          text={bestConditionText}
        />
        <Textbox header="How to Preserve This Food Longer?" />
        <Textbox header="Misconceptions About Expiration Dates" />
        <Textbox header="Food Waste" />
      </main>
      <Wave backgroundColor={data.Wave} />
    </div>
  );
};

export default Solution;
