import { useState } from "react";
import Clock from "./Clock";
function ClockControl () {
    
    const [isTurnedOn, setIsTurnedOn] = useState(false);
    const handleTurnonClick = () => {
        setIsTurnedOn(true);
    };
    const handleTurnoffClick = () => {
        setIsTurnedOn(false);
    };
    

    if(isTurnedOn) {
        
        return (
        <div>
            <h1>The clock is ON!</h1>
            <Clock/>
            <TurnOffButton onClick={handleTurnoffClick} />
        </div>
        )
    }
    else {
        
        return (
        <div>
            <h1>Clock is Turned Off!</h1>
            <p>Click the ON button to turn it back on.</p>
            <TurnOnButton onClick={handleTurnonClick} />
        </div>
        )
    }
    
   
}

const onStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "5px 15px"
}

const offStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "5px 15px"
}
function TurnOnButton(props) {
    return (
        <button onClick={props.onClick} style={onStyle}>ON</button>
    )
}

function TurnOffButton(props) {
    return (
        <button onClick={props.onClick} style={offStyle}>OFF</button>
    )
}
export default ClockControl;