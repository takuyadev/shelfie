import Wave from "../../comps/wave";
import Link from "next/link";
import ColorPanel from "../../comps/ColorPanel";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";

const BananaIcon = require("../../img/Banana.png");
const OrangeIcon = require("../../img/Orange.png");

const FruitorVegetable = () => (
  <div className="app">
    <div className="nav-button-layout">
      <BackButton />
      <RestartButton />
    </div>
    <main>
      <h1>Pick your fruit.</h1>
      <p>Click on either of the panels!</p>
      <div className="two-panel">
        <ColorPanel
          backgroundColor="#FFF27D"
          boxShadow="0px 10px 0px #BCAB19"
          text="Banana"
          img={BananaIcon}
        />
        <ColorPanel
          backgroundColor="#CEFF7D"
          boxShadow="0px 10px 0px #78AE1E"
          text="Orange"
          img={OrangeIcon}
        />
      </div>
      <Link href="../Solution">
        <ConfirmButton />
      </Link>
    </main>
    <Wave />
  </div>
);

export default FruitorVegetable;
