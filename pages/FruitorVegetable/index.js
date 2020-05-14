import React, { useState } from "react";
import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData, linkChange} from "../../data";

const VegetableIcon = require("../../img/vegetable.png");
const FruitIcon = require("../../img/fruit.png");

console.log(data.Seasons);


const FruitorVegetable = () => {
  const [linkChangePage, setlinkChangePage] = useState(
    "../Pick");
  const [buttonClass, setButtonClass] = useState("grayButton_box");
  
  return (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Seasons" />
      <RestartButton />
    </div>
    <main>
      <h1>Fruit or Vegetable?</h1>
      <p className="infoText">Choose whether you want to view a selection of vegetables or fruit</p>
      <div className="two-panel">
        <ColorPanel
          class="Vegi"
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Vegetable"
          img={VegetableIcon}
          onClick={() => {
            setButtonClass("confirmButton_box");
            ChangeData({
              FruitorVegetable: 0,
              Fridge: "",
              Pick: "",
              Wave: data.Wave,
              Seasons: data.Seasons,
              Option: "",
            });
            setlinkChangePage(linkChange[data.FruitorVegetable])
          }}
        />
        <ColorPanel
          class="Fruit"
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Fruit"
          img={FruitIcon}
          onClick={() => {
            setButtonClass("confirmButton_box");
            ChangeData({
              FruitorVegetable: 1,
              Fridge: "",
              Pick: "",
              Wave: data.Wave,
              Seasons: data.Seasons,
              Option: "",
            });
            setlinkChangePage(linkChange[data.FruitorVegetable])
          }}
        />
      </div>
      <ConfirmButton link={linkChangePage} className={buttonClass} />
    </main>
    <Wave backgroundColor={data.Wave} />
  </div>
  )};


export default FruitorVegetable;
