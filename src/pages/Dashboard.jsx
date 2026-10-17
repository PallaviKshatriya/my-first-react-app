import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  return (
    <>
      <h1>Credit Risk Dashboard</h1>

      <SummaryCard
        title="Total Exposure"
        value="£125M"
      />

      <SummaryCard
        title="Limit Usage"
        value="68%"
      />

      <SummaryCard
        title="Counterparties"
        value="452"
      />
    </>
  );
}

export default Dashboard;