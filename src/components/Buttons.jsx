import satData from "./satData";
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    // styling class centers the div
    <div className="flex-container">
      {/* maps displaySats to make buttons for each orbitType */}
      {displaySats.map((sat, id) => {
        // returns html for buttons with filterByType prop onClick
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      {/* a persistent button that shows all orbits onClick */}
      <button onClick={ () => setSat(satData) }>All Orbits</button>
    </div>
  );
};

export default Buttons;