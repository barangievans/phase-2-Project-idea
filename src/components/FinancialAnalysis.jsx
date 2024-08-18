import React, { useState } from 'react';
import './FinancialAnalysis.css'; // Add your CSS file for styling

const FinancialAnalysis = () => {
  // State variables for sales and costs
  const [salesCows, setSalesCows] = useState(0);
  const [salesHeifers, setSalesHeifers] = useState(0);
  const [salesMilk, setSalesMilk] = useState(0);
  const [feedCost, setFeedCost] = useState(0);
  const [treatmentCost, setTreatmentCost] = useState(0);
  const [medicalChecksCost, setMedicalChecksCost] = useState(0);
  const [labourCost, setLabourCost] = useState(0);
  const [profit, setProfit] = useState(null);
  
  // State variables for monthly records
  const [recordsByMonth, setRecordsByMonth] = useState({});
  const [selectedMonth, setSelectedMonth] = useState('');

  // Calculate total revenue and expenses
  const totalRevenue = salesCows + salesHeifers + salesMilk;
  const totalExpenses = feedCost + treatmentCost + medicalChecksCost + labourCost;

  // Function to calculate profit
  const calculateProfit = () => {
    const calculatedProfit = totalRevenue - totalExpenses;
    setProfit(calculatedProfit);

    // Notify user of the profit or loss
    if (calculatedProfit < 0) {
      alert(`Loss: $${Math.abs(calculatedProfit).toFixed(2)}`);
    } else if (calculatedProfit > 0) {
      alert(`Profit: $${calculatedProfit.toFixed(2)}`);
    } else {
      alert('No profit or loss');
    }

    // Store the record for the selected month
    if (selectedMonth) {
      setRecordsByMonth(prev => {
        const monthRecords = prev[selectedMonth] || [];
        return { ...prev, [selectedMonth]: [...monthRecords, { 
          totalRevenue, 
          totalExpenses, 
          profit: calculatedProfit 
        }] };
      });
    }
  };

  // Function to handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="financial-analysis">
      <h2>Financial Analysis</h2>
      
      {/* Month Selector */}
      <div className="month-selector">
        <label>Select Month:</label>
        <select onChange={handleMonthChange} value={selectedMonth}>
          <option value="">-- Select a Month --</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={new Date(0, i).toLocaleString('default', { month: 'long' })}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      {/* Input Section */}
      <div className="input-section">
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

        {/* Calculate Profit Button */}
        <div className="calculate-profit">
          <button onClick={calculateProfit}>Calculate Profit</button>
        </div>
      </div>

      {/* Result Section */}
      {profit !== null && (
        <div className="result">
          <h3>Profit: ${profit.toFixed(2)}</h3>
        </div>
      )}

      {/* Monthly Records Display */}
      {selectedMonth && (
        <div className="records-display">
          <h3>Records for {selectedMonth}</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Total Revenue</th>
                <th>Total Expenses</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {(recordsByMonth[selectedMonth] || []).map((record, index) => (
                <tr key={index}>
                  <td>{selectedMonth}</td>
                  <td>${record.totalRevenue.toFixed(2)}</td>
                  <td>${record.totalExpenses.toFixed(2)}</td>
                  <td>${record.profit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FinancialAnalysis;
