import Controls from './components/Controls/Controls';
import Grid from './components/Grid/Grid';

import './App.css';

function App() {
  function startSimulation(): void {}
  function pauseSimulation(): void {}
  function resetSimulation(): void {}

  return (
    <div className="App">
      <h1>Cell Growth Simulation</h1>
      <Grid title="hello" lengthOfSides={200} />
      <Controls
        startSimulation={startSimulation}
        pauseSimulation={pauseSimulation}
        resetSimulation={resetSimulation}
      />
    </div>
  );
}

export default App;
