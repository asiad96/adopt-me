import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
    <div>
        <h1>Adopt Me!</h1>
        <Pet name="Thaksin" animal="cat" breed="Short-hair"/>
        <Pet name="Igby" animal="cat" breed="Short-hair"/>
        <Pet name="Pango" animal="dog" breed="German Shepherd"/>
    </div>

};



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
