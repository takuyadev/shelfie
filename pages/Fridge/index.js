import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData } from "../../data";
import "./fridge.css";

const FridgeIcon = require("../../img/fridge.png");
const NoFridgeIcon = require("../../img/nofridge.png");

console.log(data);

const Fridge = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Pick" />
      <RestartButton />
    </div>
    <main>
      <h1>Fridge or No Fridge?</h1>
      <p>Select whether your chosen produce is being stored in the fridge or not.</p>
      <div className="two-panel">
        <ColorPanel
          backgroundColor="#7DD0FF"
          boxShadow="0px 10px 0px #3A799D"
          text="Fridge"
          img={FridgeIcon}
          onClick={() => {
            ChangeData({
              FruitorVegetable: data.FruitorVegetable,
              Pick: data.Pick,
              Wave: data.Wave,
              Seasons: data.Seasons,
              Fridge: 1,
              Option: data.Option,
            });
          }}
        />
        <ColorPanel
          backgroundColor="#FFA15C"
          boxShadow="0px 10px 0px #CA5E5E"
          text="No Fridge"
          img={NoFridgeIcon}
          onClick={() => {
            ChangeData({
              FruitorVegetable: data.FruitorVegetable,
              Fridge: 0,
              Pick: data.Pick,
              Wave: data.Wave,
              Seasons: data.Seasons,
              Option: data.Option,
            });
          }}
        />
      </div>
      <ConfirmButton link="../Solution" />
    </main>
    <Wave backgroundColor={data.Wave} />
  </div>
);

export default Fridge;
