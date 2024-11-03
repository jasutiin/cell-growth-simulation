import Controls from './components/Controls/Controls';
import Grid from './components/Grid/Grid';
import { useState } from 'react';

import './App.css';

const rows = 200;
const columns = 200;

function App() {
  function startSimulation(): void {}
  function pauseSimulation(): void {}
  function resetSimulation(): void {}

  const [interval, setInterval] = useState(1);
  const [failureProbability, setFailureProbability] = useState(0.5);
  const [lifespan, setLifespan] = useState(1);

  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(columns).fill(false)) // 2d array, initial state of cell is false, no bacteria
  );

  return (
    <div className="App">
      <h1>Cell Growth Simulation</h1>
      <Grid grid={grid} setGrid={setGrid} />
      <Controls
        startSimulation={startSimulation}
        pauseSimulation={pauseSimulation}
        resetSimulation={resetSimulation}
        setInterval={setInterval}
        setFailureProbability={setFailureProbability}
        setLifespan={setLifespan}
      />
    </div>
  );
}

export default App;
