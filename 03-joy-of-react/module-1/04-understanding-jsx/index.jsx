import React from "react";
import { createRoot } from "react-dom/client";

const element = (
    <p id="p1">
        New Way of React Element
    </p>
);

/* 
 It is important to understand that this above is JSX
 When it transforms from JSX into React Element Object (JS Object),
 we are actually using the import React, since it is React.createElement
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(element);