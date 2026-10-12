import React from "react";
import { createRoot } from 'react-dom/client';
import ContactCard from "./ContactCard";

const element = (
    <ContactCard
     key='susic-one'
     name='Haris'
     job='Software Engineer'
     email='susicharis99@gmail.com'
    />
);

const deeperElement = React.createElement(
    ContactCard,
    {
        key:'susic-one',
        name:'Haris',
        job:'Software Engineer',
        email:'susicharis99@gmail.com',
    }
);

/* When we run `deeperElement:

const deeperElement = {
    type: ContactCard,
    key: 'susic-one'
    props: {
      name...,
      job...,
      email...,
    }
}

*/


const container = document.getElementById('root');
const root = createRoot(container);
root.render(element);