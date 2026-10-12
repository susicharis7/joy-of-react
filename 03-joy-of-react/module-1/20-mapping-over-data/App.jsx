import ContactCard from "./ContactCard";
import React from "react";
import { createRoot } from 'react-dom/client';

const data = [
    {
        id: 'sunita-abc123',
        name: 'Sunita Kumar',
        job: 'Electrical Engineer',
        email: 'sunita.kumar@acme.co',
    },
    {
        id: 'henderson-def456',
        name: 'Henderson G. Sterling II',
        job: 'Receptionist',
        email: 'henderson-the-second@acme.co',
    },
    {
        id: 'aio-ghi789',
        name: 'Aoi Kobayashi',
        job: 'President',
        email: 'kobayashi.aoi@acme.co',
    },
]

function App() {
    const elements = data.map((contact) => (
        <ContactCard
         name={contact.name}
         job={contact.job}
         email={contact.email}
        />
    ));

    return (
        <ul>
            {elements}
        </ul>
    );
}

// Or we can do it like this also
function SecondApp() {
    return(
       <ul>
        {data.map((contact) => {
            return <ContactCard 
             name={contact.name}
             job={contact.job}
             email={contact.email}
            />
        })}
       </ul> 
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SecondApp />)