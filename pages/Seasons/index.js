import React, { useState } from "react";
import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData } from "../data";

const WinterIcon = require("../../img/winter.png");
const SpringIcon = require("../../img/spring.png");
const SummerIcon = require("../../img/summer.png");
const FallIcon = require("../../img/fall.png");

const Seasons = () => {
  const [waveColor, setWaveColor] = useState("#EEE");

  return (
    <div className="app">
      <div className="nav-button-layout">
        <BackButton link="../Homepage" />
        <RestartButton />
      </div>
      <main>
        <h1>Pick your Season.</h1>
        <p>Click on one of the four panels!</p>
        <div className="four-panel">
          <ColorPanel
            onClick={() => {
              setWaveColor("#7dd0ff");
              ChangeData({
                Seasons: "Winter",
                Wave: "#7dd0ff"
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
                Seasons: "Spring",
                Wave: "#CEFF7D"
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
                Seasons: "Summer",
                Wave: "#FFF27D"
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
                Seasons: "Fall",
                Wave: "#FFA15C"
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
