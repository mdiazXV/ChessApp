import Square from "./square";

function Chessboard () {
   
    const chessboardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 75px)',
        border: '2px solid black',
        wiidth: 'fit-content',
    };

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
        <div style={chessboardStyle}> {squares} </div>
    );
}

export default Chessboard