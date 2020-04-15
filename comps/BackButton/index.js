import React from "react";
import "./backbutton.css";
import Link from "next/link";

const BackButton = ({ link }) => (
  <Link href={link}>
    <div className="backButton">
      <img id="backArrow" src={require("./back.svg")} />
    </div>
  </Link>
);

BackButton.defaultProps = {
  color: "#322D2D",
  link: "../../pages/Seasons",
};

export default BackButton;
