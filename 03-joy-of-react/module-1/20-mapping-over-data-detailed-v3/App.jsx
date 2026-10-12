import React from 'react';
import ContactCard from './ContactCard';
import { data } from './data';

function App() {
    const elements = data.map((contact) => {
        return React.createElement(
            ContactCard,
            {
                key: contact.id,
                name: contact.name,
                job: contact.job,
                email: contact.email
            }            
        )
    })

    return React.createElement('ul', null, elements);
}

export default App;