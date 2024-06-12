import { useState } from "react";
import "./Counter.css";
const Counter = () => {
    const [count, setCount] = useState(10);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 0) setCount(count  -1);
    };
    return (
        <>
            <h1>Counter app</h1>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};
export default Counter;