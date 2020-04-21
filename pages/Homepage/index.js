import ConfirmButton from "../../comps/ConfirmButton";
import "./homepage.css";

const LogoIcon = require("../../img/logo.png");
const MascotIcon = require("../../img/mascot.png");

const Homepage = () => (
  <div className="app">
    <img src={LogoIcon} />
    <p className="subheading">
      Extend shelf life. <br></br>Save the world and your wallet!
    </p>
    <p className="titleText">
      Find our how long your produce <br></br> will last, and how to reduce{" "}
      <br></br>your food waste!
    </p>
    <img className="mascot" src={MascotIcon} />
    <ConfirmButton text="Get Started!" link="../Seasons" />
  </div>
);

export default Homepage;
