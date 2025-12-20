import './styles/App.css';
import Header from './components/header.jsx';
import ChessBoard from './components/chessboard.jsx';
import Timer from './components/timer.jsx';

function App() {
  return (
    <div data-testid="main" className="App">
      <Header title='Chess Game'/>
      <Timer/>
      <ChessBoard className="chessBoard"/>
    </div>
  );
}

export default App;
