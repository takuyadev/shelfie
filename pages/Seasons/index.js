import Wave from "../../comps/wave";
import Link from "next/link";
import Router from "next/router";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";

const WinterIcon = require("../../img/winter.png");
const SpringIcon = require("../../img/spring.png");
const SummerIcon = require("../../img/summer.png");
const FallIcon = require("../../img/fall.png");

const Seasons = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Homepage"/>
      <RestartButton />
    </div>
    <main>
      <h1>Pick your Season.</h1>
      <p>Click on one of the four panels!</p>
      <div className="four-panel">
        <ColorPanel
          backgroundColor="#7DD0FF"
          boxShadow="0px 10px 0px #3A799D"
          text="Winter"
          img={WinterIcon}
        />
        <ColorPanel
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Spring"
          img={SpringIcon}
        />
        <ColorPanel
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Summer"
          img={SummerIcon}
        />
        <ColorPanel
          backgroundColor="#FFA15C"
          boxShadow="0px 10px 0px #CA5E5E"
          text="Fall"
          img={FallIcon}
        />
      </div>
        <ConfirmButton link="../FruitorVegetable"/>
    </main>
    
    <Wave />
  </div>
);

export default Seasons;
