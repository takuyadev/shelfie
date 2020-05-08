//Where the data is stored during game
export let data = {
  Seasons: "1",
  Fridge: "1",
  Pick: "1",
  FruitorVegetable: "1",
  Wave: "#EEE",
  Option: "1",
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
    option2Name: "Orange",
    option2Color: "#FFA15C",
    option2BoxShadow: "0px 10px 0px #CA5E5E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/f5.png"),
    option1Name: "Cherry",
    option1Color: "#FFF27D",
    option1BoxShadow: "0px 10px 0px #BCAB19",
    option1Number: 0,
    option2Icon: require("./img/f6.png"),
    option2Name: "Strawberry",
    option2Color: "#FFA15C",
    option2BoxShadow: "0px 10px 0px #CA5E5E",
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
    option2Name: "Potatoe",
    option2Color: "#CEFF7D",
    option2BoxShadow: "0px 10px 0px #78AE1E",
    option2Number: 1,
  },
  {
    option1Icon: require("./img/v3.png"),
    option1Name: "Brocolli",
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
    option1Name: "Tomato",
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
      Mascot:require('./img/oldbanana.svg'),
      Seasons: [
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole onions will last about 2-3 months at room temperature ",
                  Preserve:
                    "To extend the shelf life, whole onions should be stored in a cool dark place, such as a pantry. If this is unavailable, store them in the fridge. They should be kepts in a paper bag or mesh bag, never in plastic bags, to encourage air circulation.Furthermore, never store onions next to potatoes. Only cut them up before consumption. Onions can also be frozen for 6-8 months. Before placing in freezer bags, peel and chop them up into small chunks.",
                  Days: "2-3 months",
                },
                {
                  bestCondition:
                    "When properly stored, whole potatoes will last about 2-3 months at room temperature.",
                  Preserve:
                    "To extend the shelf life, store potatoes in a cool dark place. Store them in a paper or mesh bag, and keep them away from contact with potatoes. Ideally, potatoes should not be kept in the fridge, as it will affect the flavour, but if you have to, remove them from the fridge a couple days before use to recover some of the flavour. Only cut them up before consumption. You can also freeze potatoes from about 10-12 months. Before placing them in freezer bags, wash, peel, boil and mash them.",
                  Days:
                    "2-3 months",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored whole apples will last about 5-7 days at room temperature. ",
                  Preserve:
                    "To extend the shelf life of apples, it is best to store them in the fridge in plastic bags. If wished to be stored at room temperature, store them in a cool, dry place, such as a pantry, to get the most out of them. Only cut them up before consumption. Apples can also be stored in the freezer for about 10-12 months. Before placing in freezer bags, wash, peel and cut them up into small chunks. ",
                  Days:
                    "5-7 days",
                },
                {
                  bestCondition:
                    "When properly stored, whole, ripe pears will last about 3-4 days at room temperature. ",
                  Preserve:
                    "To extend the shelf life of pears, they should be stored at room temperature until ripe, which is when they should be transferred to the fridge. Only cut them up before consumption. Pears can also be frozen for about 10-12 months. Before being placed in freezer bags, they should be washed, and cut up into small chunks. They should then be boiled for 1-2 minutes in a solution of 2 ¾ sugar and 4 cups of water. Drain the pears and let them cool. ",
                  Days: "3-4 days",
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
                  bestCondition:
                    "It is not recommended to ever store broccoli at room temperature, as it will only last a few hours.",
                  Preserve:
                    "To extend the shelf life of broccoli, store in a plastic bag in the fridge. Do not wash or cut it up until you are ready to use it. Broccoli can also be frozen for 12-18 months. Before placing in freezer bags, wash it, remove any leaves and stems, cut them up into small chunks, blanch them for 3 minutes then quickly chill it in ice cold water, then drain off the water.",
                  Days: "3-4 hours",
                },
                {
                  bestCondition:
                    "It is not recommended to ever store cabbage at room temperature, as it will only last about 1 week.",
                  Preserve:
                    "To extend the shelf life of cabbages, store them in the fridge in a plastic bag, and do not wash them until ready to use. Only cut them up before consumption. Cabbage can also be frozen for 12-18 months. Before placing in freezer bags, wash it, remove any leaves, cut it into thin wedges, blanch them for 2 minutes and chill quickly in ice cold water, then drain them.",
                  Days: "1 week",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "It is not recommended to ever store bananas at room temperature once they are ripe, as they will only last 1-2 days.",
                  Preserve:
                    "Bananas can also be frozen for about 2-3 months. Before placing them in freezer bags, peel and mash them in 1 tablespoon of lemons juice for each cup of mashed banana to prevent browning.",
                  Days: "1-2 days",
                },
                {
                  bestCondition:
                    "When properly stored, whole oranges will last about 5-7 days at room temperature.",
                  Preserve:
                    "To extend shelf life, store oranges in the fridge. Only cut them up before consumption. Oranges can also be frozen for about 10-12 months. Before placing in freezer bags, wash, peel and divide them into sections, removing any membranes and seeds. Boil a solution of 2 ¾ cups of sugar and 4 cups of water and pour them over the oranges. Place the syrup orange mixture in the freezer bags.",
                  Days: "5-7 days",
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
                  bestCondition:
                    "It is not recommended to store tomatoes at room temperature once ripe, as they will only last a few days. ",
                  Preserve:
                    "To extend the shelf life, store them at room temperature until they are ripe, then transfer them to the fridge. This will ultimately maximize your tomatoes and give them a better flavour. Store them in the fridge in a plastic bag. Do not chop them up until ready to eat, and bring them back up to room temperature (about 30 minutes) before using them for a better flavour. Tomatoes can also be frozen for 2-3 months. Before placing them in freezer bags, wash and dry them. Cut up the tomatoes into small chunks if they are large tomatoes (such as beefsteak tomatoes). ",
                  Days: "1-2 days",
                },
                {
                  bestCondition:
                    "It is not recommended to ever store carrots at room temperature, as they will only last a few days. ",
                  Preserve:
                    "To extend the shelf life, store carrots in a plastic bag in the fridge. Do not wash or cut them up until you are ready to consume them. Carrots can also be frozen for 10-12 months. Before placing them in freezer bags, wash, peel and cut them into chunks, blanch them for 2 minutes and chill quickly in ice cold water, drain off the water.",
                  Days: "2-4 days",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "It is not recommended to ever store cherries at room temperature, as they will only last a few days.",
                  Preserve:
                    "To extend the shelf life, refrigerate the cherries in a plastic bag. Discard any bruised or moldy cherries before placing them in the fridge. Do not wash or cut them up until you are ready to eat them. Cherries can also be frozen for 10-12 months. Before placing them in freezer bags, wash, stem and pit them, mix them in ¾ cup of sugar for every quart of cherries until sugar is dissolved.",
                  Days: "1-2 days",
                },
                {
                  bestCondition:
                    "It is not recommended to ever store strawberries at room temperature, as they will only last a few days.",
                  Preserve:
                    "To extend the shelf life of strawberries, store them in their close plastic container in the fridge, or in a shallow container that is covered. Discard any bruised or moldy strawberries before placing them in the fridge. Do not wash or cut up the strawberries until ready to eat. Strawberries can also be frozen for 10-12 months. Before placing them in freezer bags, rinse and blot them dry, and get rid of any stems. ",
                  Days: "1-2 days",
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
                  bestCondition:
                    "When properly stored, whole pumpkins will last 30-90 days at room temperature.",
                  Preserve:
                    "To extend the shelf life of pumpkins, only cut it up when you are planning to eat it. If you are storing it at room temperature, it should be kept in a cool dry place, such as a pantry. They should be carefully washed and completely dried before placing the pumpkin in the fridge or pantry. They can also be frozen, where they will last indefinitely, but should ideally be eaten within 8 months. Before placing in freezer bags, they should be cut up into small chunks.",
                  Days: "30-90 days",
                },
                {
                  bestCondition:
                    "It is not recommended to ever store zucchinis at room temperature, as they will only last 2-3 days.",
                  Preserve:
                    "To extend the shelf life of zucchinis, refrigerate them in a plastic bag, and do not wash them until you wish to consume it. Only cut them up before consumption. Zucchinis can also be frozen for about 10-12 months. Before placing them in freezer bags, wash and cut them into small chunks, blanch them for 3 minutes and chill quickly in ice cold water.",
                  Days: "2-3 days",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "It is not recommended to ever store cranberries at room temperature, as they will only last a couple days.",
                  Preserve:
                    "To extend the shelf life of grapes, discard any moldy grapes before putting them in the fridge. Furthermore, do not wash them until consumption. They can also be frozen, where they will last about 10-12 months. Before placing them in freezer bags, remove the stems, and wash and dry them.",
                  Days: "2 days",
                },
                {
                  bestCondition:
                    "It is not recommended to ever store grapes at room temperature, as they will only last about a day.",
                  Preserve:
                    "To extend the shelf life of cranberries, store them in the fridge in a plastic bag or covered container. They can also be frozen, where they will last about 10-12 months in freezer bags. ",
                  Days: "1 day",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      Mascot:require('./img/mascot.png'),
      Seasons: [
        {
          FruitorVegetable: [
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole onions will last about 2-3 months in the fridge.",
                  Preserve:
                    "To extend the shelf life, whole onions should be stored in a cool dark place, such as a pantry. If this is unavailable, store them in the fridge. They should be kepts in a paper bag or mesh bag, never in plastic bags, to encourage air circulation.Furthermore, never store onions next to potatoes. Only cut them up before consumption. Onions can also be frozen for 6-8 months. Before placing in freezer bags, peel and chop them up into small chunks.",
                  Days: "2-3 months",
                },
                {
                  bestCondition:
                    "When properly stored, whole potatoes will last about 3-4 weeks in the fridge. Ideally though, they should not be stored in the fridge.",
                  Preserve:
                    "To extend the shelf life, store potatoes in a cool dark place. Store them in a paper or mesh bag, and keep them away from contact with potatoes. Ideally, potatoes should not be kept in the fridge, as it will affect the flavour, but if you have to, remove them from the fridge a couple days before use to recover some of the flavour. Only cut them up before consumption. You can also freeze potatoes from about 10-12 months. Before placing them in freezer bags, wash, peel, boil and mash them. ",
                  Days: "3-4 weeks",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole apples will last about 1-2 months in the fridge",
                  Preserve:
                    "To extend the shelf life of apples, it is best to store them in the fridge in plastic bags. If wished to be stored at room temperature, store them in a cool, dry place, such as a pantry, to get the most out of them. Only cut them up before consumption. Apples can also be stored in the freezer for about 10-12 months. Before placing in freezer bags, wash, peel and cut them up into small chunks. Cover them in a solution made of 1 teaspoon of ascorbic acid for each 6 tablespoons of cold water.",
                  Days: "1-2 months",
                },
                {
                  bestCondition:
                    "When properly stored, whole, ripe pears will last about 5-12 days in the fridge",
                  Preserve:
                    "To extend the shelf life of pears, they should be stored at room temperature until ripe, which is when they should be transferred to the fridge. Only cut them up before consumption.  Pears can also be frozen for about 10-12 months. Before being placed in freezer bags, they should be washed, and cut up into small chunks. They should then be boiled for 1-2 minutes in a solution of 2 ¾ sugar and 4 cups of water. Drain the pears and let them cool.",
                  Days: "5-12 days",
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
                  bestCondition:
                    "When properly stored, whole broccoli will last about 7-14 days in the fridge.",
                  Preserve:
                    "To extend the shelf life of broccoli, store in a plastic bag in the fridge. Do not wash or cut it up until you are ready to use it. Broccoli can also be frozen for 12-18 months. Before placing in freezer bags, wash it, remove any leaves and stems, cut them up into small chunks, blanch them for 3 minutes then quickly chill it in ice cold water, then drain off the water.",
                  Days: "7-14 Days",
                },
                {
                  bestCondition:
                    "When properly stored, whole cabbages will last about 1-2 months in the fridge.",
                  Preserve:
                    "To extend the shelf life of cabbages, store them in the fridge in a plastic bag, and do not wash them until ready to use. Only cut them up before consumption. Cabbage can also be frozen for 12-18 months. Before placing in freezer bags, wash it, remove any leaves, cut it into thin wedges, blanch them for 2 minutes and chill quickly in ice cold water, then drain them.",
                  Days: "1-2 months",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole bananas will last about 5-7 days in the fridge once ripe.",
                  Preserve:
                    "To extend the shelf life of bananas, store them at room temperature at room temperature, then transfer them to the fridge. Only cut them up before consumption. Bananas can also be frozen for about 2-3 months. Before placing them in freezer bags, peel and mash them in 1 tablespoon of lemons juice for each cup of mashed banana to prevent browning. ",
                  Days: "5-7 Days",
                },
                {
                  bestCondition:
                    "When properly stored, whole oranges will last about 5-7 days at room temperature.",
                  Preserve:
                    "To extend shelf life, store oranges in the fridge. Only cut them up before consumption. Oranges can also be frozen for about 10-12 months. Before placing in freezer bags, wash, peel and divide them into sections, removing any membranes and seeds. Boil a solution of 2 ¾ cups of sugar and 4 cups of water and pour them over the oranges. Place the syrup orange mixture in the freezer bags. ",
                  Days: "3-4 weeks",
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
                  bestCondition:
                    "When properly stored, whole tomatoes will last about 5-7 days in the fridge once ripe.",
                  Preserve:
                    "To extend the shelf life, store them at room temperature until they are ripe, then transfer them to the fridge. This will ultimately maximize your tomatoes and give them a better flavour. Store them in the fridge in a plastic bag. Do not chop them up until ready to eat, and bring them back up to room temperature (about 30 minutes) before using them for a better flavour. Tomatoes can also be frozen for 2-3 months. Before placing them in freezer bags, wash and dry them. Cut up the tomatoes into small chunks if they are large tomatoes (such as beefsteak tomatoes). ",
                  Days: "5-7 days",
                },
                {
                  bestCondition:
                    "When properly stored, whole carrots will last about 3-4 weeks in the fridge.",
                  Preserve:
                    "To extend the shelf life, store carrots in a plastic bag in the fridge. Do not wash or cut them up until you are ready to consume them. Carrots can also be frozen for 10-12 months. Before placing them in freezer bags, wash, peel and cut them into chunks, blanch them for 2 minutes and chill quickly in ice cold water, drain off the water.",
                  Days: "3-4 weeks",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole cherries will last about 4-10 days in the fridge.",
                  Preserve:
                    "To extend the shelf life, refrigerate the cherries in a plastic bag. Discard any bruised or moldy cherries before placing them in the fridge. Do not wash or cut them up until you are ready to eat them. Cherries can also be frozen for 10-12 months. Before placing them in freezer bags, wash, stem and pit them, mix them in ¾ cup of sugar for every quart of cherries until sugar is dissolved.",
                  Days: "4-10 Days",
                },
                {
                  bestCondition:
                    "When properly stored, whole strawberries will last about 3-7 days in the fridge.",
                  Preserve:
                    "To extend the shelf life of strawberries, store them in their close plastic container in the fridge, or in a shallow container that is covered. Discard any bruised or moldy strawberries before placing them in the fridge. Do not wash or cut up the strawberries until ready to eat. Strawberries can also be frozen for 10-12 months. Before placing them in freezer bags, rinse and blot them dry, and get rid of any stems.",
                  Days: "3-7 Days",
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
                  bestCondition:
                    "When properly stored, whole pumpkins will last 5 months in the fridge. Fresh cut pumpkin can last upwards of 3 days.",
                  Preserve:
                    "To extend the shelf life of pumpkins, only cut it up when you are planning to eat it. If you are storing it at room temperature, it should be kept in a cool dry place, such as a pantry. They should be carefully washed and completely dried before placing the pumpkin in the fridge or pantry. They can also be frozen, where they will last indefinitely, but should ideally be eaten within 8 months. Before placing in freezer bags, they should be cut up into small chunks.",
                  Days: "5 Months",
                },
                {
                  bestCondition:
                    "When properly stored, whole zucchinis will last about 1-2 weeks in the fridge.",
                  Preserve:
                    "To extend the shelf life of zucchinis, refrigerate them in a plastic bag, and do not wash them until you wish to consume it. Only cut them up before consumption.  Zucchinis can also be frozen for about 10-12 months. Before placing them in freezer bags, wash and cut them into small chunks, blanch them for 3 minutes and chill quickly in ice cold water. ",
                  Days: "1-2 weeks",
                },
              ],
            },
            {
              Option: [
                {
                  bestCondition:
                    "When properly stored, whole cranberries last 3-4 weeks on average in the fridge, but can last as much as 6 weeks.",
                  Preserve:
                    "To extend the shelf life of cranberries, store them in the fridge in a plastic bag or covered container. They can also be frozen, where they will last about 10-12 months in freezer bags.",
                  Days: "3-4 Weeks",
                },
                {
                  bestCondition:
                    "When properly stored, whole grapes last 7-14 days on average in the fridge. ",
                  Preserve:
                    "To extend the shelf life of grapes, discard any moldy grapes before putting them in the fridge. Furthermore, do not wash them until consumption. They can also be frozen, where they will last about 10-12 months. Before placing them in freezer bags, remove the stems, and wash and dry them.",
                  Days: "7-14 Days",
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
