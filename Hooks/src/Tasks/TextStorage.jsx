import { useState, useEffect } from "react";

const TextStorage = () => {
    const [text, setText] = useState(() => {
        return localStorage.getItem("myText") || "";
    });

    useEffect(() => {
        localStorage.setItem("myText", text);
    }, [text]);

    return (
        <div>
            <h2>Збереження тексту</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                cols={40}
            />
        </div>
    );
};

export default TextStorage;