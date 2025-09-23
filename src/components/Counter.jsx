import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const decreaseCounter = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
                <button onClick={incrementCounter}>
                    Click to increase the counter
                </button>
                <button onClick={decreaseCounter}>
                    Click to decrease the counter
                </button>
            
        </div>
    )
}

export default Counter;