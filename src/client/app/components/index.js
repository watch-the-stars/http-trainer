import { createGlobalStyle } from 'styled-components';

import Button from './Button';
import Container from './Container';
import Paragraph from './Paragraph';
import Title from './Title';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export { Button, Container, Paragraph, Title, GlobalStyle };
