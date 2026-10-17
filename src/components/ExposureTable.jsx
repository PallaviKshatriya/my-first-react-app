import exposures from "../data/exposure";

function ExposureTable() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Counterparty</th>
          <th>Country</th>
          <th>Rating</th>
          <th>Exposure</th>
        </tr>
      </thead>

      <tbody>
        {exposures.map((item) => (
          <tr key={item.id}>
            <td>{item.counterparty}</td>
            <td>{item.country}</td>
            <td>{item.rating}</td>
            <td>{item.exposure.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExposureTable;