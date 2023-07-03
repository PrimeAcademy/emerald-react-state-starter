import './App.css';
// Object destructuring: Our import is equivalent to these two lines
// import React from 'react';
// useState = React.useState;
import { useState } from 'react';

import Clicker from '../Clicker/Clicker';

function App() {
    const [color, setColor ] = useState('red');

    return (
        <>
            <Clicker color={color} setColor={setColor}/>
            <Clicker />
            <Clicker />
        </>
    )
}

export default App;
