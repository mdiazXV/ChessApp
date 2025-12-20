import Square from "./square";

function Chessboard () {
   
    const chessboardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 75px)',
        border: '2px solid black',
        wiidth: 'fit-content',
    };

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
        <div style={chessboardStyle}> {squares} </div>
    );
}

export default Chessboard