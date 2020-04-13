import React from 'react';
import './text.css';

const Text = () => <div>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>This is the primary type face. It will always be 16pt regular. Lorum Ipsum blah blah blah blah blah blah blah</p>
</div>

Text.defaultProps = {
    color: '#322D2D'
}

export default Text; 
