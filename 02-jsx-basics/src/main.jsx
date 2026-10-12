import { createRoot } from "react-dom/client";
import App from './App.jsx';
import React from "react";

const element = React.createElement(
  'div',
  { id: "div-one"},
  React.createElement('h1', {class: "title"}, 'Welcome'),
  React.createElement('p', {id: "desc"}, 'This is my app'),
  React.createElement('button', {id: "btn-one"}, 'Click this bro.')
);
const root = createRoot(document.getElementById('root'));

root.render(element);