function Square ({isBlack}) {
    console.log("This is what was received ", {isBlack});
    const size = "75px";
    const squareStyle = {
        width: size,
        height: size,
        backgroundColor: isBlack ? "#b015dbff" : "#eeeed2",
    }

    return (
            <div style={squareStyle}> 
            </div>
    );

}


export default Square;