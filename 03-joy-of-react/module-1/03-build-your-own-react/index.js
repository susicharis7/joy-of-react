function render(reactElement, containerDOMElement) {
  // 1. create a DOM Element
  const domElement = document.createElement(reactElement.type);
  // 2. update properties
  domElement.textContent = reactElement.children;

  // domElement.setAttribute('href', reactElement.props.href); 
  // This is one way to do it but it is fixed, meaning if we have more props we would have to manually change it
  
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  // 3. put it in the container
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    id: 'firstLink',
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on wikipedia'
};

const containerDOMElement = document.getElementById('root');

render(reactElement, containerDOMElement);