import React, {Component} from 'react';
import { Button, Container, Paragraph, Title, GlobalStyle } from './components/index';
import { YaPracticumLogo } from './components/YaPracticumLogo/YaPracticumLogo';

const CODES = [404, 500, 304, 200, 503, 403];

class App extends Component {
  renderButtons() {
    return CODES.map((code, i) => <Button key={i} onClick={() => fetch(`/${code}`)}>{`Кнопка ${i + 1}`}</Button>);
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Тренажёр для работы с запросами</Title>
        <Paragraph>Задание: определи, что получается при нажатии на кнопку. Описание ошибок в шпаргалке.</Paragraph>
        {this.renderButtons()}
        <YaPracticumLogo />
      </Container>
    );
  }
}

export default App;
