import Square from "./square";
import '../styles/chessboard.css';

function Chessboard () {

    const squares = [];

    for(let row = 0; row < 8; row++){
        for (let column = 0; column < 8; column++){
            const isBlack = (row + column) % 2 === 1;
            squares.push(
            <Square key={`${row}-${column}`} isBlack={isBlack} />
            );
        }
    }
   
    return (
        <div className="board"> {squares} </div>
    );
}

export default Chessboard