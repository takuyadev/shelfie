import React from "react";
import "./confirm.css";
import Link from "next/link";

const ConfirmButton = ({ link }) => (
  <Link href={link}>
    <div className="confirmButton_box">
      <div className="confirmButton_box_inner">Confirm</div>
    </div>
  </Link>
);

ConfirmButton.defaultProps = {
  link: "../../pages/Seasons",
};

export default ConfirmButton;
