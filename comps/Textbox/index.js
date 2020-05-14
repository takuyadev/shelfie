import React from "react";
import "./Textbox.css";

// this is a sample of one textbox component,
// when comes to combination, I will put 3 more components
const Textbox = ({ header, text}) => (
  <div className="Textbox_box">
    <h6>{header}</h6>
    <div className="Textbox_box_par">{text}</div>
  </div>
);

Textbox.defaultProps = {
  header: "header",
  text: "default",
};

export default Textbox;

// How Long Does it Last <br></br>Under Best Conditions?        How to Preserve This Food <br></br>Longer?