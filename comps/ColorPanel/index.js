import React from "react";
import "./ColorPanel.css";

const defaultImg = require("./strawberry.png");

const ColorPanel = ({ text, backgroundColor, img, boxShadow }) => (
  <button
    className="colorPanels"
    style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
  >
    <p>{text}</p>
    <img src={img} />
  </button>
);

ColorPanel.defaultProps = {
  text: "Default",
  backgroundColor: "#EEE",
  img: defaultImg,
  boxShadow: "0px 10px 0px",
};

export default ColorPanel;
