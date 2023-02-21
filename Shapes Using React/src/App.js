import logo from "./logo.svg";
import "./App.css";
import Circle from "./Components/Circle";
import Rectangle from "./Components/Rectangle";

function App() {
  return (
    <div className="body">
      <div id="cards">
        <Circle />
        <Rectangle />
      </div>
    </div>
  );
}

export default App;
