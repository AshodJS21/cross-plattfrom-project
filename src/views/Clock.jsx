import React, { useEffect, useState } from "react";
import '../style/Clock.css'


const Clock = () => {
    const [clockState, setClockState] = useState();

    //live
    useEffect(() => {
    setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    }, 1000);
    }, []);

    return (

    <div className="clock-page">
            <h3>Your LocalTime</h3>
            {clockState}
    </div> 
    )
};

export default Clock;
