function TotalCost({ totalcost }) {
  return (
    <div className="total-cost-container">
      <h1>القيمة كاملة : {totalcost.toFixed(2)} ريال</h1>
      <button>اكمل طلبك</button>
    </div>
  );
}
export default TotalCost;
