import React from 'react';
import Link from "next/link";
import RestartButton from '../../comps/RestartButton';



const Homepage = () => <div className="homepage">
   <div className="header">Shelfie</div>
   <div className="bodytext" >
       Extend shelf life. Save the world and your wallet
   </div>
<div className="bodytext">
    Find our how long your produce will last, and how to reduce your food waste!</div>
    <RestartButton></RestartButton>
</div>



Text.defaultProps = {
    color: '#322D2D'
}

export default Homepage; 