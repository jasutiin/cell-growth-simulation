import './Controls.css';

interface ControlsProps {
  startSimulation: () => void;
  pauseSimulation: () => void;
  resetSimulation: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  startSimulation,
  pauseSimulation,
  resetSimulation,
}) => {
  return (
    <div className="outer-container">
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="interval-input">Time Interval:</label>
          <input type="number" id="interval-input" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="probability-input">Probability of Failure:</label>
          <input type="number" id="probability-input" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="lifespan-input">Lifespan of Cells:</label>
          <input type="number" id="lifespan-input" className="input-field" />
        </div>
      </div>
      <div>
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
