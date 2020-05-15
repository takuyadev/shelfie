import "./tutorial.css";
import React from "react";
import BackButton from "../../comps/BackButton";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import { data, ChangeData, VegetableInfo } from "../../data";
import Text from "../../comps/Text";
import Textbox from "../../comps/Textbox"; 

const Tutorial = () => {
return (
<div className="app">
      <div className="nav-button-layout">
        <BackButton link="../Homepage" />
      </div>
      <h5 class="tutorialHeader" id="tutorialHeaderFirst"> About Shelfie </h5>
      <p class="tutorialText"> Shelfie is an app that aims to educate users about the lifespan of common produce. Through using the app, users will learn the averege lifespan of certain produce, how to extend the shelf life of different foods, misconceptions about expiration dates, and the overall global problem that is food waste. <br></br><br></br>
      By learning this information, users will be able to make better decisions regardinig their food, which will not only save them money, but also reduce their personal impact on the food waste problem, and help the environment. </p>
      <h5 class="tutorialHeader"> How it Works </h5>
      <p class="tutorialText"> Once the user starts the app, they will be asked a series of questions, each with their own predetirminied answers for the user to choose from. The user must make the selection they want. Once they have answered all the questions, the app will compile that data, and present the user with useful information on a particular produce based on the selections they made </p>
</div>
); 
}

export default Tutorial; 