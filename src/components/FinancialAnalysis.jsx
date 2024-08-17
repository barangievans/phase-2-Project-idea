import React, { useState } from 'react';
import './FinancialAnalysis.css'; // Add your CSS file for styling

const FinancialAnalysis = () => {
  const [salesCows, setSalesCows] = useState(0);
  const [salesHeifers, setSalesHeifers] = useState(0);
  const [salesMilk, setSalesMilk] = useState(0);
  const [feedCost, setFeedCost] = useState(0);
  const [treatmentCost, setTreatmentCost] = useState(0);
  const [medicalChecksCost, setMedicalChecksCost] = useState(0);
  const [labourCost, setLabourCost] = useState(0);
  const [profit, setProfit] = useState(null);

  const totalRevenue = salesCows + salesHeifers + salesMilk;
  const totalExpenses = feedCost + treatmentCost + medicalChecksCost + labourCost;

  const calculateProfit = () => {
    const calculatedProfit = totalRevenue - totalExpenses;
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
      <table>
        <thead>
          <tr>
            <th>Expenses</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <label>Cost of Feeds:</label>
                <input
                  type="number"
                  value={feedCost}
                  onChange={(e) => setFeedCost(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Cost of Treatment:</label>
                <input
                  type="number"
                  value={treatmentCost}
                  onChange={(e) => setTreatmentCost(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Routine Medical Checks:</label>
                <input
                  type="number"
                  value={medicalChecksCost}
                  onChange={(e) => setMedicalChecksCost(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Labour Costs:</label>
                <input
                  type="number"
                  value={labourCost}
                  onChange={(e) => setLabourCost(Number(e.target.value))}
                />
              </div>
            </td>
            <td>
              <div>
                <label>Sale of Cows:</label>
                <input
                  type="number"
                  value={salesCows}
                  onChange={(e) => setSalesCows(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Sale of Heifers:</label>
                <input
                  type="number"
                  value={salesHeifers}
                  onChange={(e) => setSalesHeifers(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Sale of Milk:</label>
                <input
                  type="number"
                  value={salesMilk}
                  onChange={(e) => setSalesMilk(Number(e.target.value))}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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







