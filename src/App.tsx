import Controls from './components/Controls/Controls';
import Grid from './components/Grid/Grid';
import { useState } from 'react';

import './App.css';

const rows = 200;
const columns = 200;

function App() {
  const [running, setRunning] = useState(false);
  const [interval, setInterval] = useState(1);
  const [failureProbability, setFailureProbability] = useState(0.5);
  const [lifespan, setLifespan] = useState(1);
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(columns).fill(false)) // 2d array, initial state of cell is false, no bacteria
  );
  const hashmap = new Map<[number, number], string>();

  // idea:
  // 1. everytime you click on a cell, add (row, col) tuple to hashmap as key
  // 2. then, add adjacent cells inside hashmap at key which are not already bacteria cells
  //  2a. since we know coords of clicked cell, we can just append (row+1, col)... wrapped in if statement (if !bacteria)
  // 3. after interval, random num generator [0, 1]
  //  3a. if num < failureProbability, multiply
  //  3b. rand num generator to get random coord val in key
  async function startSimulation(): Promise<void> {
    setRunning(true);
    while (running) {
      await sleep(interval * 1000);
      let row: number = getRandomArbitrary(0, rows + 1);
      let col: number = getRandomArbitrary(0, columns + 1);
      console.log('row: %d, col: %d', row, col);
      toggleCell(row, col);
    }
  }
  function pauseSimulation(): void {
    setRunning(false);
  }
  function resetSimulation(): void {}

  function toggleCell(rowIndex: number, columnIndex: number): void {
    let copy = [...grid];
    let val = copy[rowIndex][columnIndex];
    hashmap.set([rowIndex, columnIndex], 'hi');
    copy[rowIndex][columnIndex] = !val;
    setGrid(copy);
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="App">
      <h1>Cell Growth Simulation</h1>
      <Grid grid={grid} setGrid={setGrid} toggleCell={toggleCell} />
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
