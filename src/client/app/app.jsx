import React, {Component} from 'react';

const CODES = [404, 500, 304, 200, 503, 403];

class App extends Component {
  renderButtons() {
    return CODES.map((code, i) => <button key={i} onClick={() => fetch(`/${code}`)}>{`Кнопка ${i + 1}`}</button>);
  }

  render() {
    return (
      <div>
        <h1>Тренажёр для работы с запросами</h1>
        <div>Задание: определи, что получается при нажатии на кнопку. Описание ошибок в шпаргалке.</div>
        {this.renderButtons()}
        <div>Яндекс.Практикум</div>
      </div>
    );
  }
}

export default App;
