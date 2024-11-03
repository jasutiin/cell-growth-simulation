import './Controls.css';

interface ControlsProps {
  startSimulation: () => void;
  pauseSimulation: () => void;
  resetSimulation: () => void;
  setInterval: (value: number) => void;
  setFailureProbability: (value: number) => void;
  setLifespan: (value: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  startSimulation,
  pauseSimulation,
  resetSimulation,
  setInterval,
  setFailureProbability,
  setLifespan,
}) => {
  return (
    <div className="outer-container">
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="interval-input">Time Interval (s):</label>
          <input
            type="number"
            min="1"
            onChange={(e) => setInterval(Number(e.target.value))}
            id="interval-input"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="probability-input">
            Probability of Failure [0,1]:
          </label>
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            onChange={(e) => setFailureProbability(Number(e.target.value))}
            id="probability-input"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lifespan-input">Lifespan of Cells (s):</label>
          <input
            type="number"
            min="1"
            onChange={(e) => setLifespan(Number(e.target.value))}
            id="lifespan-input"
            className="input-field"
          />
        </div>
      </div>
      <div className="button-container">
        <button type="button" onClick={startSimulation} id="start-button">
          Start
        </button>
        <button type="button" onClick={pauseSimulation} id="pause-button">
          Pause
        </button>
        <button type="button" onClick={resetSimulation} id="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Controls;
