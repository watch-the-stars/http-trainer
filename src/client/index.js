import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app';
import 'whatwg-fetch';

const ROOT_ELEMENT_ID = 'app';

const rootElement = createRootElement();
document.body.appendChild(rootElement);
ReactDom.render(React.createElement(App), rootElement);

function createRootElement() {
  const element = document.createElement('div');
  element.setAttribute('id', ROOT_ELEMENT_ID);
  return element;
}
