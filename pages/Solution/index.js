import React, { useState, useEffect } from "react";
import Wave from "../../comps/wave";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import "./solution.css";
import { data, ChangeData, SolutionText } from "../../data";
import Textbox from "../../comps/Textbox";

console.log(
  SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
    data.FruitorVegetable
  ].Option[data.option]
);

console.log(data);

const Solution = () => {
  const [bestConditionText, setBestConditionText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].bestCondition
  );
  const [PreserveText, setPreserveText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].Preserve
  );
  const [DaysText, setDaysText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].Days
  );
  const [BananaLogo, setBananaLogo] = useState(
    SolutionText.Fridge[data.Fridge].Mascot
  );
  
  return (
    <div className="app">
      <div className="navBar" id="anchorTop">
        <RestartButton></RestartButton>
      </div>
      <main>
        <h4>{DaysText} left!</h4>
        <p>
          By all estimates, this food will last about {DaysText} under your
          selected conditions.
        </p>
        <img src={BananaLogo} className="BananaMan" />
        <br></br>
        <Textbox
          header="How Long Does it Last Under Best Conditions?"
          text={bestConditionText}
        />
        <Textbox
          header="How to Preserve This Food Longer?"
          text={PreserveText}
        />
        <Textbox header="Misconceptions About Expiration Dates" />
        <Textbox header="How to reduce Food Waste" />
        <ConfirmButton link="#anchorTop" text="Go back to the top!" color="FFA15C" />
      </main>
      <Wave backgroundColor={data.Wave} />
    </div>
  );
};

export default Solution;
