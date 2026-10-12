// Creating a "Button" Component

import React from "react";
import { createRoot } from 'react-dom/client';

function Button({ text, color, borderColor }) {
    return(
        <button
        style={{
            border: '2px solid',
            color: color,
            borderColor, // same as borderColor: borderColor
            background: 'white',
            borderRadius: 4,
            padding: 16,
            margin: 8,
        }}
        >
        {text} 
        </button>
    );
}

function App() {
    return(
        <div>
            <Button 
             text='Cancel'
             color='red'
             borderColor='red' 
            />

            <Button 
             text='Confirm'
             color='black'
             borderColor='black'
            />
        </div>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);