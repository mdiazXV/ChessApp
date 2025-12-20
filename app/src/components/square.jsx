import '../styles/square.css';

function Square ({isBlack, coordinates}) {
    
    function classNames() {
        const colorClass = isBlack ? "black" : "white";
        const classes = "square " + colorClass;
        console.log(classNames);
        return classes;
    }
    
    function getCoordinates ()  {
        console.log(coordinates);
    }

    return (
        <button className={classNames()} onClick={getCoordinates} />
    );

}

export default Square;