import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData } from "../data";

const BananaIcon = require("../../img/banana.png");
const OrangeIcon = require("../../img/orange.png");

const Pick = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../FruitorVegetable"/>
      <RestartButton />
    </div>
    <main>
      <h1>Pick your Vegetable.</h1>
      <p>Click on either of the panels!</p>
      <div className="two-panel">
        <ColorPanel
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Vegi 1"
          img={}
        />
        <ColorPanel
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Vegi 2"
          img={}
        />
      </div>
        <ConfirmButton link="../Fridge"/>
    </main>
    <Wave backgroundColor={data.Wave}/>
  </div>
);

export default Pick;
