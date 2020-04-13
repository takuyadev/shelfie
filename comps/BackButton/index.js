import React from 'react';
import './backbutton.css';

const BackButton = () => <div class="backButton">
    <img id="backArrow" src={require('./back.svg')} />
</div>

BackButton.defaultProps = {
    color: '#322D2D'
}

export default BackButton;  
