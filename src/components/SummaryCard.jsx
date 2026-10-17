function SummaryCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        width: "200px"
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default SummaryCard;