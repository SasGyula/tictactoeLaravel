import logo from './logo.svg';
import './App.css';
import JatekTer from './components/JatekTer.js';

function App() {
  const LISTA = ['X','O','X','O','X','O','X','O','X']
  return (
    <div className="App">
      <header className="App-header"> TicTacToe </header>
      <article className="grides">
          <JatekTer lista={LISTA}/>
      </article>
    </div>
  );
}

export default App;
