import React from 'react';
import './ColorPanel.css';

const defaultImg = require("./strawberry.png");

const ColorPanel = ({text, backgroundColor, img}) => (
    <button className="colorPanels" style={{backgroundColor:{backgroundColor}}}>
        <p>{text}</p>
        <img src={img}/>
    </button>
)

ColorPanel.defaultProps = {
    text: "Default",
    backgroundColor: "#EEE",
    img: defaultImg
}
export default ColorPanel;