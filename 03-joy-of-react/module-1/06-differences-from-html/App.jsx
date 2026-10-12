import React from "react";
import { createRoot } from 'react-dom/client';

const element = React.createElement(
    'div',
    null,
    React.createElement(
        'label',
        {htmlFor: 'name'}
    ),
    React.createElement(
        'input',
        {
         id: 'name',
         className: 'fun-input'
        }
    )
);

const customStyles = {
    fontSize: '2rem',
    color: 'red'
};

const secondElement = (
    <h1 style={customStyles}>Hello</h1>
);

/*

We need two sets of squiggly brackets:

- The outer set creates an "expression slot" in the JSX, to hold a JavaScript expression
- The inner set creates a JavaScript object, which holds our CSS declarations

*/

const thirdElement = (
    <h1 style={{ color: 'aquamarine'}}>Test</h1>
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(thirdElement);


/*
function App() {
    return(
        <div>
            <label for="name"></label>
            <input id="name" class="fun-input"></input>
        </div>
    )
}

export default App;
*/

/*
function App() {
    return(
        <div>
            <label htmlFor="name"></label>
            <input id="name" className="fun-input"></input>
        </div>
    )
};

export default App;
*/
