import React from "react";
import Link from "next/link";
import "./restartbutton.css";
import { data, FruitInfo } from "../../data";

const RestartButton = ({ onClick }) => (
  <Link href="../../Homepage">
    <div onClick={onClick} className="restartButton">
      Restart
    </div>
  </Link>
);

RestartButton.defaultProps = {
  background: "#FF5959",
  color: "#FBFBFB",
  text: "Restart",
  onClick: "",
};

export default RestartButton;
