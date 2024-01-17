import data from "../data.json";
import Content from "./Content";

function App() {
    return (
        <div>
            {data.map((item, index) => (
                <Content key={index} {...item} />
            ))}
        </div>
    );
}

export default App;