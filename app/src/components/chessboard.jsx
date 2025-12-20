import Square from "./square";
import '../styles/chessboard.css';

function Chessboard () {

    const squares = [];
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for(let row = 0; row < 8; row++){
        for (let column = 0; column < 8; column++){
            const isBlack = (row + column) % 2 === 1;
            const file = files[column];
            const rank = 8 - row;
            const coordinates = `${file}${rank}`;
            squares.push(
            <Square key={coordinates} 
                isBlack={isBlack} 
                coordinates= {coordinates} />
            );
        }
    }

   
    return (
        <div className="board"> {squares} </div>
    );
}

export default Chessboard