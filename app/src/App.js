import './App.css';
import Header from './components/header.jsx';
import ChessBoard from './components/chessboard.jsx';
import Timer from './components/timer.jsx';

// Have the ChessBoard component be made up of individual custom Square components
// Have the Square components take in a prop that will decide the colors of them.
// Implement the styling for the squares to see this work too.

function App() {
  return (
    <div data-testid="main" className="App">
      <Header title='Chess Game'/>
      <Timer/>
      <ChessBoard/>
    </div>
  );
}

export default App;
