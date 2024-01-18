import React, { useState } from "react";
// import './Styles.css';

const Count = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button className="btn1" onClick={() => handleIncrement()}>Increment</button>
            <button className="btn2" onClick={() => handleDecrement()}>Decrement</button>
        </div>
    )
}

export default  Count;