export let data = {
  Seasons: "",
  Fridge: "",
  Pick: "",
  FruitorVegetable: "",
  Wave: "#EEE",
};

if (process.browser){
    var sessionData = sessionStorage.getItem("data");
    ChangeData(JSON.parse(sessionData))
}

export function ChangeData(d) {
  data = d;
  sessionStorage.setItem("data", JSON.stringify(data));
}


export const Hard = () =>{
  
};

export default Hard;