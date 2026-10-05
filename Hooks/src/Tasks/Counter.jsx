import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Лічильник: ${count}`;
    }, [count]);

    return (
        <div>
            <h2>Лічильник: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
};

export default Counter;