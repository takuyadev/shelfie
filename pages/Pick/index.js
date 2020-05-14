import React, { useState } from "react";
import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData, FruitInfo } from "../../data";

// let FruitIcon1 = FruitInfo[data.Seasons].option1Icon;
// let FruitIcon2 = FruitInfo[data.Seasons].option2Icon;
// let FruitName1 = FruitInfo[data.Seasons].option1Name;
// let FruitName2 = FruitInfo[data.Seasons].option2Name;

const Pick = () => {
  const [FruitIcon1, setFruitIcon1] = useState(
    FruitInfo[data.Seasons].option1Icon
  );
  const [FruitIcon2, setFruitIcon2] = useState(
    FruitInfo[data.Seasons].option2Icon
  );
  const [FruitName1, setFruitName1] = useState(
    FruitInfo[data.Seasons].option1Name
  );
  const [FruitName2, setFruitName2] = useState(
    FruitInfo[data.Seasons].option2Name
  );
  const [buttonClass, setButtonClass] = useState("grayButton_box");
  return (
    <div className="app">
      <div className="nav-button-layout">
        <BackButton
          onClick={() => {
            setFruitIcon1(FruitInfo[data.Seasons].option1Icon);
            setFruitIcon2(FruitInfo[data.Seasons].option2Icon);
            setFruitName1(FruitInfo[data.Seasons].option1Name);
            setFruitName2(FruitInfo[data.Seasons].option2Name);
          }}
          link="../FruitorVegetable"
        />
        <RestartButton />
      </div>
      <main>
        <h1>Pick your fruit.</h1>
        <p>Click on either of the panels!</p>
        <div className="two-panel">
          <ColorPanel
          
            backgroundColor={FruitInfo[data.Seasons].option1Color}
            boxShadow={FruitInfo[data.Seasons].option1BoxShadow}
            text={FruitName1}
            img={FruitIcon1}
            onClick={() => {
              setButtonClass("confirmButton_box");
              ChangeData({
                FruitorVegetable: data.FruitorVegetable,
                Fridge: "",
                Pick: FruitInfo[data.Seasons].option1Name,
                Wave: data.Wave,
                Seasons: data.Seasons,
                Option: FruitInfo[data.Seasons].option1Number,
              });
            }}
          />
          <ColorPanel
            backgroundColor={FruitInfo[data.Seasons].option2Color}
            boxShadow={FruitInfo[data.Seasons].option2BoxShadow}
            text={FruitName2}
            img={FruitIcon2}
            onClick={() => {
              setButtonClass("confirmButton_box");
              ChangeData({
                FruitorVegetable: data.FruitorVegetable,
                Fridge: "",
                Pick: FruitInfo[data.Seasons].option2Name,
                Wave: data.Wave,
                Seasons: data.Seasons,
                Option: FruitInfo[data.Seasons].option2Number,
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
