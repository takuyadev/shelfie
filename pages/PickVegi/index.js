import React, { useState } from "react";
import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData, VegetableInfo } from "../../data";

// const VegeIcon1 = require("../../img/banana.png");
// const VegeIcon2 = require("../../img/orange.png");

const Pick = () => {
  const [VegetableIcon1, setVegetableIcon1] = useState(
    VegetableInfo[data.Seasons].option1Icon
  );
  const [VegetableIcon2, setVegetableIcon2] = useState(
    VegetableInfo[data.Seasons].option2Icon
  );
  const [VegetableName1, setVegetableName1] = useState(
    VegetableInfo[data.Seasons].option1Name
  );
  const [VegetableName2, setVegetableName2] = useState(
    VegetableInfo[data.Seasons].option2Name
  );
  const [buttonClass, setButtonClass] = useState("grayButton_box");

  return (
    <div className="app">
      <div className="nav-button-layout">
        <BackButton
          link="../FruitorVegetable"
          onClick={() => {
            setVegetableIcon1(VegetableInfo[data.Seasons].option1Icon);
            setVegetableIcon2(VegetableInfo[data.Seasons].option2Icon);
            setVegetableName1(VegetableInfo[data.Seasons].option1Name);
            setVegetableName2(VegetableInfo[data.Seasons].option2Name);
          }}
        />
        <RestartButton />
      </div>
      <main>
        <h1>Pick your Vegetable.</h1>
        <p>Click on either of the panels!</p>
        <div className="two-panel">
          <ColorPanel
            backgroundColor={VegetableInfo[data.Seasons].option1Color}
            boxShadow={VegetableInfo[data.Seasons].option1BoxShadow}
            text={VegetableName1}
            img={VegetableIcon1}
            onClick={() => {
              setButtonClass("confirmButton_box");
              ChangeData({
                FruitorVegetable: data.FruitorVegetable,
                Fridge: "",
                Pick: VegetableInfo[data.Seasons].option1Name,
                Wave: data.Wave,
                Seasons: data.Seasons,
                Option: VegetableInfo[data.Seasons].option1Number,
              });
            }}
          />
          <ColorPanel
            backgroundColor={VegetableInfo[data.Seasons].option2Color}
            boxShadow={VegetableInfo[data.Seasons].option2BoxShadow}
            text={VegetableName2}
            img={VegetableIcon2}
            onClick={() => {
              setButtonClass("confirmButton_box");
              ChangeData({
                FruitorVegetable: data.FruitorVegetable,
                Fridge: "",
                Pick: VegetableInfo[data.Seasons].option2Name,
                Wave: data.Wave,
                Seasons: data.Seasons,
                Option: VegetableInfo[data.Seasons].option2Number,
              });
            }}
          />
        </div>
        <ConfirmButton link="../Fridge" className={buttonClass} />
      </main>
      <Wave backgroundColor={data.Wave} />
    </div>
  );
};
export default Pick;