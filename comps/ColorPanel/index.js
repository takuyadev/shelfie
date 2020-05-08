import React from "react";
import "./ColorPanel.css";

const defaultImg = require("./strawberry.png");

const ColorPanel = ({ text, backgroundColor, img, boxShadow, onClick}) => (
  <button
    className="colorPanels"
    onClick={onClick}
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
  onClick:"#000",
};

export default ColorPanel;
