import "./App.css";
import WithLegendState from "./Components/WithLegendState";
import WithoutLegendState from "./Components/WithoutLegendState";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", flex: "1 1" }}
    >
      <WithoutLegendState />
      <WithLegendState />
    </div>
  );
}

export default App;
