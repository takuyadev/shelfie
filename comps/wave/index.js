import React from 'react'
import './wave.css';


const Wave = ({ backgroundColor }) => (
  <div className="wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={backgroundColor}
        fill-opacity="1"
        d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,69.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
);

Wave.defaultProps = {
  backgroundColor: "#EEE"
}

export default Wave;