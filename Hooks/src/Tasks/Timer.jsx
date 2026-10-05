import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <h2>Секундомір: {seconds} с</h2>
        </div>
    );
};

export default Timer;