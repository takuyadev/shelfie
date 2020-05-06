//Where the data is stored during game
export let data = {
  Seasons: "1",
  Fridge: "",
  Pick: "",
  FruitorVegetable: "",
  Wave: "#EEE",
  Option: "",
};

//All data for Fruit and Vegetables; names, color and icon.
export let FruitInfo = [
  {
    option1Icon: require("./img/f1.png"),
    option1Name: "Apple",
    option1Color: "#FFA15C",
    option1Number: 0,
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option2Icon: require("./img/f2.png"),
    option2Name: "Pears",
    option2Color: "#CEFF7D",
    option2BoxShadow: "0px 10px 0px #78AE1E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/f3.png"),
    option1Name: "Banana",
    option1Color: "#FFF27D",
    option1BoxShadow: "0px 10px 0px #BCAB19",
    option1Number: 0,
    option2Icon: require("./img/f4.png"),
    option2Name: "Rhubarb",
    option2Color: "#7DD0FF",
    option2BoxShadow: "0px 10px 0px #3A799D",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/f5.png"),
    option1Name: "Cherry",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option1Number: 0,
    option2Icon: require("./img/f6.png"),
    option2Name: "Strawberry",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    Color: "#FFF27D",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/f7.png"),
    option1Name: "Cranberries",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option1Number: 0,
    option2Icon: require("./img/f8.png"),
    option2Name: "Grape",
    option2Color: "#7DD0FF",
    option2BoxShadow: "0px 10px 0px #3A799D",
    option2Number: 1,
  },
];

export let VegetableInfo = [
  {
    option1Icon: require("./img/v1.png"),
    option1Name: "Onion",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option1Number: 0,
    option2Icon: require("./img/v2.png"),
    option2Name: "Broccoli",
    option2Color: "#CEFF7D",
    option2BoxShadow: "0px 10px 0px #78AE1E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/v3.png"),
    option1Name: "Tomato",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option1Number: 0,
    option2Icon: require("./img/v4.png"),
    option2Name: "Cabbage",
    option2Color: "#CEFF7D",
    option2BoxShadow: "0px 10px 0px #78AE1E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/v5.png"),
    option1Name: "Corn",
    option1Color: "#FFF27D",
    option1BoxShadow: "0px 10px 0px #BCAB19",
    option1Number: 0,
    option2Icon: require("./img/v6.png"),
    option2Name: "Carrot",
    option2Color: "#FFA15C",
    option2BoxShadow: "0px 10px 0px #CA5E5E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/v7.png"),
    option1Name: "Pumpkin",
    option1Color: "#FFA15C",
    option1BoxShadow: "0px 10px 0px #CA5E5E",
    option1Number: 0,
    option2Icon: require("./img/v8.png"),
    option2Name: "Zucchini",
    option2Color: "#CEFF7D",
    option2BoxShadow: "0px 10px 0px #78AE1E",
    option2Number: 1,
  },
];

// 0 is Vegetable, 1 is Fruit.
// 0 is No Fridge, 1 is w/Fridge
export const SolutionText = {
  Fridge: [
    {
      Seasons: [
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Onion no fridge",
                  Days: "1",
                },
                {
                  Text: "Brocolli no fridge",
                  Days: "2",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Apple no fridge",
                  Days: "3",
                },
                {
                  Text: "Pears no fridge",
                  Days: "4",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Tomato no fridge",
                  Days: "5",
                },
                {
                  Text: "Cabbage no fridge",
                  Days: "6",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "banana no fridge",
                  Days: "7",
                },
                {
                  Text: "Rhubarb no fridge",
                  Days: "8",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Corn",
                  Days: "9",
                },
                {
                  Text: "Carrot no fridge",
                  Days: "10",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Cherry no fridge",
                  Days: "11",
                },
                {
                  Text: "Strawberry no fridge",
                  Days: "12",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Corn no fridge",
                  Days: "13",
                },
                {
                  Text: "Pumpkin no fridge",
                  Days: "14",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Cranberries no fridge",
                  Days: "15",
                },
                {
                  Text: "Grape no fridge",
                  Days: "16",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      Seasons: [
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Onion fridge",
                  Days: "17",
                },
                {
                  Text: "Brocolli fridge",
                  Days: "18",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Apple fridge",
                  Days: "19",
                },
                {
                  Text: "Pears fridge",
                  Days: "20",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Tomato fridge",
                  Days: "21",
                },
                {
                  Text: "Cabbage fridge",
                  Days: "22",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "banana fridge",
                  Days: "23",
                },
                {
                  Text: "Rhubarb fridge",
                  Days: "24",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Corn",
                  Days: "25",
                },
                {
                  Text: "Carrot fridge",
                  Days: "26",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Cherry fridge",
                  Days: "27",
                },
                {
                  Text: "Strawberry fridge",
                  Days: "28",
                },
              ],
            },
          ],
        },
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  Text: "Corn fridge",
                  Days: "29",
                },
                {
                  Text: "Pumpkin fridge",
                  Days: "30",
                },
              ],
            },
            {
              Option: [
                {
                  Text: "Cranberries fridge",
                  Days: "31",
                },
                {
                  Text: "Grape fridge",
                  Days: "32",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const ChangeBestCondition = () => {
  if (data.FruitorVegetable == "Fruit") {
    if ((data.Pick = "Apple" && data.Fridge == 1)) {
      data.bestCondition = "test";
    }
  }
};

const ChangeFruitorVegetable = () => {
  if (data.FruitorVegetable == "Fruit") {
  } else if (data.FruitorVegetable == "Vegetable") {
  }
};

//Session Storage; refresh page and still retain info
if (process.browser) {
  var sessionData = sessionStorage.getItem("data");
  ChangeData(JSON.parse(sessionData));
}

export function ChangeData(d) {
  data = d;
  sessionStorage.setItem("data", JSON.stringify(data));
}
