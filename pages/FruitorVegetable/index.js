import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData} from "../../data";
import React, {useState} from 'react';
import Link from "next/link";

const VegetableIcon = require("../../img/vegetable.png");
const FruitIcon = require("../../img/fruit.png");

const Pick = "../Pick";
const PickVegi = "../PickVegi"; 

console.log(data.Seasons);

const FruitorVegetable = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Seasons" />
      <RestartButton />
    </div>
    <main>
      <h1>Fruit or Vegetable?</h1>
      <p>Choose whether you want to view vegetables or fruit.</p>
      <div className="two-panel">
        <ColorPanel
          class="Vegi"
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Vegetable"
          img={VegetableIcon}
         onClick={() => {
            ChangeData({
              FruitorVegetable: 0,
              Fridge: "",
              Pick: "",
              Wave: data.Wave,
              Seasons: data.Seasons,
              Option: ""
            });
          }}
        />
        <ColorPanel
          class="Fruit"
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Fruit"
          img={FruitIcon}
          onClick={() => {
            ChangeData({
              FruitorVegetable: 1,
              Fridge: "",
              Pick: "",
              Wave: data.Wave,
              Seasons: data.Seasons,
              Option: "",
            });
          }}
        />
      </div>
      <ConfirmButton class="NextPage" link={PickVegi} />
      
    </main>
    <Wave backgroundColor={data.Wave} />
  </div>
);

export default FruitorVegetable;

