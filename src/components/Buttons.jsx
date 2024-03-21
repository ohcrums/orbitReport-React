import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
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