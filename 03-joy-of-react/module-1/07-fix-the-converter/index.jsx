import React from 'react';
import { createRoot } from 'react-dom/client';

const days = 90;

const element = (
    <div>
    <strong>
    Days until Santa returns:
    </strong>
    {' '} {/* Without this, we would not have any whitespace */}
    {days}
    </div>
);

const secElement = React.createElement(
    'div',
    {},
    React.createElement(
        'strong',
        {},
        'Days until santa returns:'
    ),
    ' ', /* And it compiles like this code right here*/
    days
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(element);

