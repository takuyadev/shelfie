import React from "react";
import ColorPanel from "../comps/ColorPanel";
import Wave from "../comps/wave";
export default {
  title: "Components",
};

export const FourPanelLayout = () => (
  <div
    style={{
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "20px",
      width: "500px",
      height: "500px",
    }}
  >
    <ColorPanel
      backgroundColor="#7DD0FF"
      boxShadow="0px 10px 0px #3A799D"
      text="Winter"
    />
    <ColorPanel
      backgroundColor="#CEFF7D"
      boxShadow="0px 10px 0px #78AE1E"
      text="Spring"
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
);

export const TwoPanelLayout = () => (
  <div
    style={{
      display: "grid",
      gridTemplateRows: "1fr",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "20px",
      width: "500px",
      height: "500px",
    }}
  >
    <ColorPanel
      backgroundColor="#7DD0FF"
      boxShadow="0px 10px 0px #3A799D"
      text="Winter"
    />
    <ColorPanel
      backgroundColor="#FFA15C"
      boxShadow="0px 10px 0px #CA5E5E"
      text="Fall"
    />
  </div>
);

export const WaveColor = () => <Wave />;

export const FullPage = () => (
         <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             height: "100vh",
             width: "100vw",
           }}
         >
           <div
             style={{
               display: "grid",
               gridTemplateRows: "1fr",
               gridTemplateColumns: "1fr 1fr",
               gridGap: "20px",
               width: "500px",
               height: "500px",
             }}
           >
             <ColorPanel
               backgroundColor="#7DD0FF"
               boxShadow="0px 10px 0px #3A799D"
               text="Winter"
             />
             <ColorPanel
               backgroundColor="#FFA15C"
               boxShadow="0px 10px 0px #CA5E5E"
               text="Fall"
             />
             <Wave backgroundColor="#CCEDFF" />
           </div>
         </div>
       );
