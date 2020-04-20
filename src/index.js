// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const  buttonText = { text: 'Click ME!'};
    const lableText = 'Enter Name:';

    return (
        <div>
            <label className="lable" htmlFor="name">
                {lableText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on screen
ReactDOM.render(<App />,document.querySelector('#root'));

