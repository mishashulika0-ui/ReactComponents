import { useRef, useEffect } from "react";

const AutoFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>Автофокус</h2>
            <input ref={inputRef} placeholder="Введіть щось..." />
        </div>
    );
};

export default AutoFocus;