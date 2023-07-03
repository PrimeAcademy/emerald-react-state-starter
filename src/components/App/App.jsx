import './App.css';
// Object destructuring: Our import is equivalent to these two lines
// import React from 'react';
// useState = React.useState;
import { useState } from 'react';

import Clicker from '../Clicker/Clicker';

function App() {
    const [color, setColor ] = useState('red');

    return (
        // We need to wrap everything in a fragment ('<>') so that 
        // App only returns one parent element.
        <>
        {/* Here we're passing in color and setColor from our useState */}
        {/* We're passing them as props to the Clicker component */}
            <Clicker color={color} setColor={setColor}/>
            <Clicker />
            <Clicker />
        </>
    )
}

export default App;
