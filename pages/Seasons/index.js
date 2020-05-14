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
              setWaveColor("#7dd0ff");
              ChangeData({
                Seasons: 0,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#7dd0ff",
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
              setWaveColor("#CEFF7D");
              ChangeData({
                Seasons: 1,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#CEFF7D",
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
              setWaveColor("#FFF27D");
              ChangeData({
                Seasons: 2,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#FFF27D",
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
              setWaveColor("#FFA15C");
              ChangeData({
                Seasons: 3,
                Fridge: "",
                Pick: "",
                FruitorVegetable: "",
                Wave: "#FFA15C",
              });
              console.log(data.Seasons, data.Wave);
            }}
            backgroundColor="#FFA15C"
            boxShadow="0px 10px 0px #CA5E5E"
            text="Fall"
            img={FallIcon}
          />
        </div>
        <ConfirmButton link="../FruitorVegetable" />
      </main>
      <Wave class="waveColor" backgroundColor={waveColor} />
    </div>
  );
};

export default Seasons;
