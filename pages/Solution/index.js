import React, { useState, useEffect } from "react";
import Wave from "../../comps/wave";
import RestartButton from "../../comps/RestartButton";
import ConfirmButton from "../../comps/ConfirmButton";
import "./solution.css";
import { data, ChangeData, SolutionText } from "../../data";
import Textbox from "../../comps/Textbox";

const ExpDates = <p>When we go to supermarkets, we rely on expiration dates to make our purchasing decisions, however, expiration dates are extremely misleading. Currently, there are no laws that set exact expiration dates for food, so it is up to businesses to decide what date to put on their products. As such, many businesses purposely put on dates that are shorter than the true expiration date, so to encourage consumers to throw food out sooner, and buy more of that same product. For example, eggs can be eaten 3-5 weeks after purchase, even though the “use by” date is much earlier, and a box of mac-and-cheese can be consumed a year after its expiration date with no change in quality. 
<br></br><br></br>In fact, many of the dates on food labeling are there for supermarket workers to know which products are older than others. 
<br></br><br></br>As such, tonnes of edible food is thrown out every year that could have been eaten, which in turn contributes to the systemic problem that is food waste. It is recommended to use expiration dates as a guide, not an exact science, and to use your sight and smell to determine whether a food item has gone bad. When in doubt though, refer to the credible sources online to determine whether your food is still safe to eat. 
</p> 

const FoodWaste = <p>In Canada, 63% of households throw away food that could have been eaten. Annually, Canadian households toss out about 140 kilograms of edible food, which equates to about $1,100. The most common foods that are wasted are produce, with 30% of food waste being vegetables and 15% being fruit.
<br></br><br></br>Not only is this a waste of money for Canadians, and a waste of food that could have been eaten by people, but it is a waste of the resources taken to make the food and deliver it to consumers. The amount of food wasted each year contributes to an extra 9.8 million tonnes of CO2 and 2.1 million cars on the road. Furthermore, wasted produce usually ends up in the landfill, rather than being properly composted where it could then have been used by farmers. As such, the food waste problem is also having a great negative impact on the environment.  
<br></br><br></br>However, the good thing is, is that the food waste problem can be solved. Consumers can play a part by properly planning the food they buy, so they only buy what they need, saving/using leftovers, not throwing out edible or ugly food, and taking the steps to prolong the shelf life of the food they buy. Similarly, supermarkets can help by donating unsold food to food banks, putting ugly produce on sale, or giving unsellable produce to farms who can then use it to feed their animals and crops.  
</p>

const Solution = () => {
  const [bestConditionText, setBestConditionText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].bestCondition
  );
  const [PreserveText, setPreserveText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].Preserve
  );
  const [DaysText, setDaysText] = useState(
    SolutionText.Fridge[data.Fridge].Seasons[data.Seasons].FruitorVegetable[
      data.FruitorVegetable
    ].Option[data.Option].Days
  );
  const [BananaLogo, setBananaLogo] = useState(
    SolutionText.Fridge[data.Fridge].Mascot
  );
  const [buttonClass, setButtonClass] = useState("confirmButton_box");
  return (
    <div className="app">
      <div className="navBar" id="anchorTop">
        <RestartButton></RestartButton>
      </div>
      <main>
        <h4>{DaysText} left!</h4>
        <p class="resultText">
          By all estimates, this food will last about {DaysText} under your
          selected conditions.
        </p>
        <img src={BananaLogo} className="BananaMan" />
        <br></br>
        <Textbox
          header="How Long Does it Last Under Best Conditions?"
          text={bestConditionText}
        />
        <Textbox
          header="How to Preserve This Food Longer?"
          text={PreserveText}
        />
        <Textbox header="Misconceptions About Expiration Dates"
        text={ExpDates}
       />
        <Textbox header="How to Reduce Food Waste"
        text={FoodWaste}
        />
      
        <ConfirmButton link="#anchorTop" text="Go Back to the Top!" className={buttonClass} />
      </main>
      <Wave backgroundColor={data.Wave} />
    </div>
  );
};

export default Solution;
