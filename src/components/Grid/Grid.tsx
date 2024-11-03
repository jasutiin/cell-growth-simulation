import './Grid.css';

interface GridProps {
  grid: boolean[][];
  setGrid: React.Dispatch<React.SetStateAction<any[][]>>;
  toggleCell: (rowIndex: number, columnIndex: number) => void;
}

interface CellProps {
  isBacteria: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ isBacteria, onClick }) => {
  return (
    <div
      className={`cell ${isBacteria ? 'alive' : 'dead'}`}
      onClick={onClick}
    ></div>
  );
};

const Grid: React.FC<GridProps> = ({ grid, setGrid, toggleCell }) => {
  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((isBacteria, columnIndex) => (
            <Cell
              key={columnIndex}
              isBacteria={isBacteria}
              onClick={() => toggleCell(rowIndex, columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
