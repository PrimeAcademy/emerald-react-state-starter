import { useState } from 'react';

function Clicker (props) {
      // useState is a function, and we'll pass in whatever we want the initial value to be
    // [ currentStateValue, functionToUpdateStateValue ]
    const [ name, setName ] = useState('Emma');
    const [ count, setCount ] = useState(0);

    // count ++ is equivalent to count = count + 1;

    const handleClick = () => {
        // This tells React that we're making a change!
        // React needs to know when state changes so it can update the DOM
        setCount(count + 1);
        console.log('clicked');
        // do some other stuff
    }

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <p>My favorite color is {props.color}</p>
            <button onClick={handleClick}>Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default Clicker;