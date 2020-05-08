import React from "react";
import "./confirm.css";
import Link from "next/link";

const ConfirmButton = ({ link, text }) => (
  <Link href={link}>
    <div className="confirmButton_box">
      <div className="confirmButton_box_inner">{text}</div>
    </div>
  </Link>
);

ConfirmButton.defaultProps = {
  link: "../../pages/Seasons",
  text: "Confirm"
};

export default ConfirmButton;
