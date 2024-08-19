import React, { useState, useEffect } from "react";
function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    

    useEffect(() => {
        console.log("component mounted or updated");
    }, [time]);

    function showDate() {

        setTime(new Date().toLocaleTimeString());
    }
    setInterval(showDate, 1000);

    return (
    <div>
        
        <h3>It is currently</h3>
        <h1>{time}</h1>
    </div>
    );
}
export default Clock;