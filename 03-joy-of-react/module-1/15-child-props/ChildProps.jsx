import { createRoot } from 'react-dom/client';
import React from 'react';

/*
This is the first way of rendering this button with text, through props
But in HTML, we do like <button>Text here</button>, and we want to do that here also
Well, we can, and we can see that in the second example "RedButtonSecond"
*/
function RedButton({ contents }) {
    return(
        <button style={{
            color: 'white',
            backgroundColor: 'red',
        }}>
            {contents}
        </button>
    );
}

function RedButtonSecond({ children }) {
    return(
        <button style={{
            color: 'white',
            backgroundColor: 'red',
        }}>
            {children}
        </button>
    );
}


const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<RedButton contents="Do not click me. "/>)
root.render(
    <RedButtonSecond>
        Do not click me.
    </RedButtonSecond>
)