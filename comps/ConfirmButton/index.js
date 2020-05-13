import React from "react";
import "./confirm.css";
import Link from "next/link";

const ConfirmButton = ({ link, text,color }) => (
  <Link href={link}>
    <div style={{backgroundColor:color}} className="confirmButton_box">
      <div className="confirmButton_box_inner">{text}</div>
    </div>
  </Link>
);

ConfirmButton.defaultProps = {
  link: "../../pages/Seasons",
  text: "Confirm",
  color: "gray"
};

export default ConfirmButton;
