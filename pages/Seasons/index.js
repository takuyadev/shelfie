import React, { useState } from "react";
import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData } from "../../data";
import "./seasons.css";

const WinterIcon = require("../../img/winter.png");
const SpringIcon = require("../../img/spring.png");
const SummerIcon = require("../../img/summer.png");
const FallIcon = require("../../img/fall.png");

const Seasons = () => {
  const [waveColor, setWaveColor] = useState("#EEE");
  const [buttonClass, setButtonClass] = useState("grayButton_box");
  return (
    <div
      className="app"
    >
      <div className="nav-button-layout">
        <BackButton link="../Homepage" />
        <RestartButton />
      </div>
      <main>
        <h1>Pick your Season</h1>
        <p class="seasonText">The types of produce that are avaiable vary depending on the time of year. Select a season to view produce that are commonly grown, and sold in Canada during that season.</p>
        <div className="four-panel">
          <ColorPanel
            onClick={() => {
              setWaveColor("#CCEDFF");
              setButtonClass("confirmButton_box");
              ChangeData({
                Seasons: 0,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#CCEDFF",
                Option: "",
              });
              console.log(data.Seasons);
            }}
            backgroundColor="#7DD0FF"
            boxShadow="0px 10px 0px #3A799D"
            text="Winter"
            img={WinterIcon}
          />
          <ColorPanel
            onClick={() => {
              setWaveColor("#E2FFB3");
              setButtonClass("confirmButton_box");
              ChangeData({
                Seasons: 1,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#E2FFB3",
                Option: "",
              });
              console.log(data.Seasons);
            }}
            backgroundColor="#CEFF7D"
            boxShadow="0px 10px 0px #78AE1E"
            text="Spring"
            img={SpringIcon}
          />
          <ColorPanel
            onClick={() => {
              setWaveColor("#FFF7B3");
              setButtonClass("confirmButton_box");
              ChangeData({
                Seasons: 2,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#FFF7B3",
              });
              console.log(data.Seasons);
            }}
            backgroundColor="#FFF27D"
            boxShadow="0px 10px 0px #BCAB19"
            text="Summer"
            img={SummerIcon}
          />
          <ColorPanel
            onClick={() => {
              setWaveColor("#FFC499");
              setButtonClass("confirmButton_box");
              ChangeData({
                Seasons: 3,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#FFC499",
              });
              console.log(data.Seasons, data.Wave);
            }}
            backgroundColor="#FFA15C"
            boxShadow="0px 10px 0px #CA5E5E"
            text="Fall"
            img={FallIcon}
          />
        </div>
        <ConfirmButton link="../FruitorVegetable" className={buttonClass} />
      </main>
      <Wave class="waveColor" backgroundColor={waveColor} />
    </div>
  );
};

export default Seasons;
