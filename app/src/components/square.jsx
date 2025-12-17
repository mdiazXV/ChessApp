function Square ({isBlack}) {
    console.log("This is what was received ", {isBlack});

    const squareStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: isBlack ? "#b015dbff" : "#eeeed2",
    }

    return (
            <div style={squareStyle}> 
            </div>
    );

}


export default Square;