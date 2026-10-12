import React from "react";
import { createRoot } from 'react-dom/client';

function FriendlyGreeting() {
    return(
        <p
         style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'sienna',
         }}
        >
            Greetings, weary traveller !
        </p>
    )
};

/* We can also create components using arrow functions since JS supports these two ways */

const FriendlyGreetingSecond = () => {
    return(
        <p
         style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'sienna',
         }}
        >
            Greetings, weary traveller !
        </p>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FriendlyGreetingSecond />)