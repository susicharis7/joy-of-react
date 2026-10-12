import React from "react";
import { createRoot } from 'react-dom/client';

// props(object) - { name: "Haris" }
// 1. This is the most basic way of prop
function FriendlyGreeting(props) {
    return(
        <p
         style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'sienna',
         }}
        >
            Greetings, {props.name} !
        </p>
    )
};

// 2. But below is how we do it with Object Destructuring
function FriendlyGreetingBetter({ name }) {
    return(
        <p
         style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'sienna',
         }}
        >
            Greetings, {name} !
        </p>
    )
};

// 3. We can specify default value for prop if it is not provided to us
function FriendlyGreetingLast({ name = 'Guest' }) {
    return(
        <p
         style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'sienna',
         }}
        >
            Greetings, {name} !
        </p>
    )
}


// 3.1. Another example with different component
function HorizontalLine({ size = '100px' }) {
    return (
        <div style={{ width: size }}>
            { /* Line drawing stuff here */}
        </div>
    );
}

const element = React.createElement(
    FriendlyGreetingBetter,
    { name: 'Harko' }
);

console.log(element);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    // <FriendlyGreeting name="Harke" />
    // <FriendlyGreetingBetter name="Harkiz" />
    /*
    React.createElement(
        FriendlyGreetingBetter,
        {
            name: 'Harkiz'
        }
    )
        */

    // element

   // <FriendlyGreetingLast />

//    <HorizontalLine /> - it will give back 100px
   <HorizontalLine size = '250px' /> // it overrides - gives back 250px
);
