function Square ({isBlack, coordinates}) {
    const size = "75px";
    const squareStyle = {
        width: size,
        height: size,
        backgroundColor: isBlack ? "#b015dbff" : "#eeeed2",
    }
    
    function getCoordinates ()  {
        console.log(coordinates);
    }

    return (
            <button style={squareStyle} onClick={getCoordinates}>
            </button>
    );

}


export default Square;