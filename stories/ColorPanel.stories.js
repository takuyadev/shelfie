import React from "react";
import ColorPanel from "../comps/ColorPanel";

export default {
  title: "Color Panel",
  component: ColorPanel,
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
    <ColorPanel />
    <ColorPanel />
    <ColorPanel />
    <ColorPanel />
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
    <ColorPanel />
    <ColorPanel />
  </div>
);
