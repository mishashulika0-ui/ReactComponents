import "./App.css";
import Counter from "./Tasks/Counter";
import Timer from "./Tasks/Timer";
import TextStorage from "./Tasks/TextStorage";
import AutoFocus from "./Tasks/AutoFocus";
import Slider from "./Tasks/Slider";

const App = () => {
    return (
        <div className="app">
            <Counter />
            <hr />
            <Timer />
            <hr />
            <TextStorage />
            <hr />
            <AutoFocus />
            <hr />
            <Slider />
        </div>
    );
};

export default App;