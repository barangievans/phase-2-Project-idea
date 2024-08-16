import React, { useState } from 'react';

const FinancialAnalysis = () => {
  const [revenue, setRevenue] = useState('');
  const [expenses, setExpenses] = useState('');
  const [profit, setProfit] = useState(null);

  const calculateProfit = () => {
    const revenueNumber = parseFloat(revenue) || 0;
    const expensesNumber = parseFloat(expenses) || 0;
    const calculatedProfit = revenueNumber - expensesNumber;
    setProfit(calculatedProfit);

    if (calculatedProfit < 0) {
      alert(`Loss: $${Math.abs(calculatedProfit).toFixed(2)}`);
    } else if (calculatedProfit > 0) {
      alert(`Profit: $${calculatedProfit.toFixed(2)}`);
    } else {
      alert('No profit or loss');
    }
  };

  return (
    <div className="financial-analysis">
      <h2>Financial Analysis</h2>
      <div>
        <label>Revenue:</label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
      </div>
      <div>
        <label>Expenses:</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </div>
      <button onClick={calculateProfit}>Calculate Profit</button>
      {profit !== null && (
        <div className="result">
          <h3>Profit: ${profit.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default FinancialAnalysis;

