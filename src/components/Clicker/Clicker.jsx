// Object destructuring: Our import is equivalent to these two lines
// import React from 'react';
// useState = React.useState;
import { useState } from 'react';

// Clicker is expecting props from parent components
function Clicker (props) {
    // useState is a function, and we'll pass in whatever we want the initial value to be
    // We get back an array with two values:
    //      1.  The current value of the state variable
    //      2. A function to update the state variable
    //      [ currentState, setCurrentState ]
    const [ name, setName ] = useState('Emma');
    const [ count, setCount ] = useState(0);

    const handleClick = () => {
        // This tells React that we're making a change!
        // React needs to know when state changes so it can update the DOM
        setCount(count + 1);
        console.log('clicked');
    }

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            {/* We get color from props. Be sure to pass in props as a parameter! */}
            <p>My favorite color is {props.color}</p>
            {/* To handle click events, we use the html onClick attribute */}
            {/* We can pass in a function to onClick */}
            <button onClick={handleClick}>Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default Clicker;