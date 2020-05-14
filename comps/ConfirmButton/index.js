import React from "react";
import "./confirm.css";
import Link from "next/link";

const ConfirmButton = ({ link, text, className }) => (
  <Link href={link}>
    <div  className={className}>
      <div className="confirmButton_box_inner">{text}</div>
    </div>
  </Link>
);

ConfirmButton.defaultProps = {
  link: "../../pages/Seasons",
  text: "Confirm",
  className: "grayButton_box"
};

export default ConfirmButton;
