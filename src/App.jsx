import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import { useState } from "react";


function App() {
  // holds two variables. sat will be used to compare chnages in state. setSat is a function used to update the state. array set as equal to useState passed satData
  const [sat, setSat] = useState(satData);

  // Used to create the buttons, pulls the orbitType values of objects in satData. 
  // variable uses the Set method to create an array of unique elements with mapping. A value in Set may only occur once, and so prevents duplicate elements in the array, given the use of a spread operator. 
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // defined function takes currentType as parameter
  const filterByType = (currentType) => {
    // sets up a new array with the filter method
    const displaySats = satData.filter((newSatDisplay) => {
      // filters objects with orbitTypes that match the currentType parameter
      return newSatDisplay.orbitType === currentType;
    });
    // setSat updates the state of sat with the filtered array
    setSat(displaySats);
 };

  return (
  <div>
    <Banner />
    <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
    />
    <Table sat={sat} />
  </div>
  );
}

export default App;