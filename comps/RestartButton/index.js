import React from 'react';
import './restartbutton.css';

const RestartButton = () => (
<div className="restartButton">
    Restart 
</div>
);

RestartButton.defaultProps = {
    background: '#FF5959',
    color: '#FBFBFB',
    text: 'Restart'
}

export default RestartButton; 