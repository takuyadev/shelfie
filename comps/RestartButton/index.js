import React from 'react';
import Link from 'next/link';
import './restartbutton.css';

const RestartButton = () => <Link href="../../Homepage">
<div className="restartButton">
    Restart 
</div>
</Link>

RestartButton.defaultProps = {
    background: '#FF5959',
    color: '#FBFBFB',
    text: 'Restart'
}

export default RestartButton; 