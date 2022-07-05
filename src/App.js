import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Car />
      </header>
    </div>
  );
}

export default App;
