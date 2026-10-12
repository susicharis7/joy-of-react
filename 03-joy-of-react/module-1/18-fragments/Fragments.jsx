import React from 'react';
import { createRoot } from 'react-dom/client';

/*
function Fragments() {
    return(
        <>
            <h1>Welcome</h1>
            <p>Hey</p>
        </>
    );
}
*/

function Fragments() {
    return(
        React.createElement(
            React.Fragment,
            {},
            React.createElement(
                'h1',
                null,
                'Welcome'
            ),
            React.createElement(
                'p',
                null,
                'Hey'
            )
        )
    );
}


/*
function Fragments() {
    return(
        React.createElement('h1', null, 'Welcome'),
        React.createElement('p', null, 'Hey')
    );
}
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Fragments />)

export default Fragments;