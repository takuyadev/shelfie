import Wave from "../../comps/wave";
import Link from "next/link";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";

const BananaIcon = require("../../img/Banana.png");
const OrangeIcon = require("../../img/Orange.png");

const Seasons = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton />
      <RestartButton />
    </div>
    <main>
      <h1>Pick your Season.</h1>
      <p>Click on either of the panels!</p>
      <div className="four-panel">
        <ColorPanel
          backgroundColor="#7DD0FF"
          boxShadow="0px 10px 0px #3A799D"
          text="Winter"
          img={BananaIcon}
        />
        <ColorPanel
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Spring"
          img={OrangeIcon}
        />
        <ColorPanel
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Summer"
        />
        <ColorPanel
          backgroundColor="#FFA15C"
          boxShadow="0px 10px 0px #CA5E5E"
          text="Fall"
        />
      </div>

      <Link href="../FruitorVegetable">
        <ConfirmButton />
      </Link>
    </main>
    <Wave />
  </div>
);

export default Seasons;
