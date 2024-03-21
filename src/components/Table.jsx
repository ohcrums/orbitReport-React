import './styling.css';

// table must provide satellite data: Name, Type of satellite, Launch Date, and Status
const Table = ({ sat }) => {
  return (
    // define table
    <table>
      {/* table header section */}
      <thead>
        {/* table rows */}
        <tr>
          {/* headers */}
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      {/* table body section */}
      <tbody>
        {/* look through sat data with map function */}
        {sat.map((data) => (
          // for each data, creat a table row
          <tr key={data.id}>
            {/* sat data to show in the cells */}
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            {/* conditional statement displays text based on boolean value of data.operational */}
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;