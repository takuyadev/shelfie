import Wave from "../../comps/wave";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";

const FridgeIcon = require("../../img/fridge.png");
const NoFridgeIcon = require("../../img/nofridge.png");

const Fridge = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton link="../Pick"/>
      <RestartButton />
    </div>
    <main>
      <h1>Fridge or no Fridge?</h1>
      <p>Click on either of the panels!</p>
      <div className="two-panel">
        <ColorPanel
         backgroundColor="#7DD0FF"
         boxShadow="0px 10px 0px #3A799D"
          text="Fridge"
          img={FridgeIcon}
        />
        <ColorPanel
          backgroundColor="#FFA15C"
          boxShadow="0px 10px 0px #CA5E5E"
          text="No Fridge"
          img={NoFridgeIcon}
        />
      </div>
        <ConfirmButton link="../Solution"/>
    </main>
    <Wave />
  </div>
);

export default Fridge;
