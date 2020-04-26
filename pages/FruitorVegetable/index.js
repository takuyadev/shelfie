import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData } from "../../data";

const VegetableIcon = require("../../img/vegetable.png");
const FruitIcon = require("../../img/fruit.png");

const FruitorVegetable = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Seasons"/>
      <RestartButton />
    </div>
    <main>
      <h1>Fruit or Vegetable?</h1>
      <p>Click on either of the panels!</p>
      <div className="two-panel">
        <ColorPanel
          class="Vegi"
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Vegetable"
          img={VegetableIcon}
        />
        <ColorPanel
          class="Fruit"
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Fruit"
          img={FruitIcon}
        />
      </div>
        <ConfirmButton onClick="Pick Page" link="../Pick"/>
    </main>
    <Wave backgroundColor={data.Wave}/>
  </div>
);



export default FruitorVegetable;
