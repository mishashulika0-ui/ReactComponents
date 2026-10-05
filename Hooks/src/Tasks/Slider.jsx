import { useState, useEffect } from "react";

const slides = [
    { id: 1, text: "Слайд 1", color: "#e94560" },
    { id: 2, text: "Слайд 2", color: "#0f3460" },
    { id: 3, text: "Слайд 3", color: "#16213e" }
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(i => (i + 1) % slides.length);
        }, 3000);

        return () => clearInterval(id);
    }, []);

    const slide = slides[index];

    return (
        <div>
            <h2>Слайдер</h2>
            <div
                style={{
                    background: slide.color,
                    color: "white",
                    padding: "50px",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "30px"
                }}
            >
                {slide.text}
            </div>
        </div>
    );
};

export default Slider;