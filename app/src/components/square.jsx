import '../styles/square.css';

function Square ({isBlack}) {
    
    function classNames() {
        const colorClass = isBlack ? "black" : "white";
        const classes = "square " + colorClass;
        console.log(classNames);
        return classes;
    }

    return (
        <div className={classNames()}> 
        </div>
    );

}

export default Square;