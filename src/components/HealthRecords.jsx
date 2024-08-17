import React, { useState } from 'react';
import styles from './HealthRecords.css'; // Ensure this path is correct

const sampleCows = [
  { id: "1", name: "Apollo", breed: "Holstein-Friesian" },
  { id: "2", name: "Ruby", breed: "Holstein-Friesian" },
  { id: "3", name: "Bessie", breed: "Holstein-Friesian" },
  { id: "4", name: "Daisy", breed: "Jersey" },
  // Add more cow entries as needed
];

const HealthRecords = () => {
  const [cows] = useState(sampleCows);
  const [selectedCow, setSelectedCow] = useState(null);
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [vaccinationCost, setVaccinationCost] = useState('');
  const [treatedDate, setTreatedDate] = useState('');
  const [treatedCost, setTreatedCost] = useState('');
  const [checkUpDate, setCheckUpDate] = useState('');
  const [checkUpCost, setCheckUpCost] = useState('');
  const [parasiteControlDate, setParasiteControlDate] = useState('');
  const [parasiteControlCost, setParasiteControlCost] = useState('');
  const [dewormingDate, setDewormingDate] = useState('');
  const [dewormingCost, setDewormingCost] = useState('');
  const [cowServedDate, setCowServedDate] = useState('');
  const [cowServedCost, setCowServedCost] = useState('');

  const [isVaccinationDone, setIsVaccinationDone] = useState(false);
  const [isTreatedDone, setIsTreatedDone] = useState(false);
  const [isCheckUpDone, setIsCheckUpDone] = useState(false);
  const [isParasiteControlDone, setIsParasiteControlDone] = useState(false);
  const [isDewormingDone, setIsDewormingDone] = useState(false);
  const [isCowServedDone, setIsCowServedDone] = useState(false);

  const [recordsByMonth, setRecordsByMonth] = useState({});
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleCowChange = (event) => {
    const selectedId = event.target.value;
    const cow = cows.find(cow => cow.id === selectedId);
    setSelectedCow(cow);

    // Reset form fields when a new cow is selected
    resetForm();
  };

  const resetForm = () => {
    setVaccinationDate('');
    setVaccinationCost('');
    setTreatedDate('');
    setTreatedCost('');
    setCheckUpDate('');
    setCheckUpCost('');
    setParasiteControlDate('');
    setParasiteControlCost('');
    setDewormingDate('');
    setDewormingCost('');
    setCowServedDate('');
    setCowServedCost('');
    setIsVaccinationDone(false);
    setIsTreatedDone(false);
    setIsCheckUpDone(false);
    setIsParasiteControlDone(false);
    setIsDewormingDone(false);
    setIsCowServedDone(false);
  };

  const handleAddRecord = () => {
    if (!selectedCow) {
      alert('Please select a cow.');
      return;
    }

    const monthName = new Date().toLocaleString('default', { month: 'long' });
    const newRecord = {
      cow: selectedCow.name,
      vaccination: isVaccinationDone ? { date: vaccinationDate, cost: vaccinationCost } : null,
      treated: isTreatedDone ? { date: treatedDate, cost: treatedCost } : null,
      checkUp: isCheckUpDone ? { date: checkUpDate, cost: checkUpCost } : null,
      parasiteControl: isParasiteControlDone ? { date: parasiteControlDate, cost: parasiteControlCost } : null,
      deworming: isDewormingDone ? { date: dewormingDate, cost: dewormingCost } : null,
      cowServed: isCowServedDone ? { date: cowServedDate, cost: cowServedCost } : null,
    };

    setRecordsByMonth(prev => {
      const monthRecords = prev[monthName] || [];
      return { ...prev, [monthName]: [...monthRecords, newRecord] };
    });

    // Reset form fields after adding the record
    resetForm();
    setSelectedCow(null);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Health Records</h2>
      <form>
        <label>
          Select Cow:
          <select onChange={handleCowChange} value={selectedCow ? selectedCow.id : ''}>
            <option value="">-- Select a Cow --</option>
            {cows.map(cow => (
              <option key={cow.id} value={cow.id}>
                {cow.name}
              </option>
            ))}
          </select>
        </label>
        {selectedCow && (
          <div>
            <h3>{selectedCow.name} ({selectedCow.breed})</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Practice</th>
                  <th>Done</th>
                  <th>Date</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vaccination</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isVaccinationDone}
                      onChange={(e) => setIsVaccinationDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isVaccinationDone && (
                      <input
                        type="date"
                        value={vaccinationDate}
                        onChange={(e) => setVaccinationDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isVaccinationDone && (
                      <input
                        type="number"
                        value={vaccinationCost}
                        onChange={(e) => setVaccinationCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Treated</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isTreatedDone}
                      onChange={(e) => setIsTreatedDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isTreatedDone && (
                      <input
                        type="date"
                        value={treatedDate}
                        onChange={(e) => setTreatedDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isTreatedDone && (
                      <input
                        type="number"
                        value={treatedCost}
                        onChange={(e) => setTreatedCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Routine Check Up</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isCheckUpDone}
                      onChange={(e) => setIsCheckUpDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isCheckUpDone && (
                      <input
                        type="date"
                        value={checkUpDate}
                        onChange={(e) => setCheckUpDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isCheckUpDone && (
                      <input
                        type="number"
                        value={checkUpCost}
                        onChange={(e) => setCheckUpCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Parasite Control</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isParasiteControlDone}
                      onChange={(e) => setIsParasiteControlDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isParasiteControlDone && (
                      <input
                        type="date"
                        value={parasiteControlDate}
                        onChange={(e) => setParasiteControlDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isParasiteControlDone && (
                      <input
                        type="number"
                        value={parasiteControlCost}
                        onChange={(e) => setParasiteControlCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Deworming</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isDewormingDone}
                      onChange={(e) => setIsDewormingDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isDewormingDone && (
                      <input
                        type="date"
                        value={dewormingDate}
                        onChange={(e) => setDewormingDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isDewormingDone && (
                      <input
                        type="number"
                        value={dewormingCost}
                        onChange={(e) => setDewormingCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Cow Served</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={isCowServedDone}
                      onChange={(e) => setIsCowServedDone(e.target.checked)}
                    />
                  </td>
                  <td>
                    {isCowServedDone && (
                      <input
                        type="date"
                        value={cowServedDate}
                        onChange={(e) => setCowServedDate(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {isCowServedDone && (
                      <input
                        type="number"
                        value={cowServedCost}
                        onChange={(e) => setCowServedCost(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" onClick={handleAddRecord}>Add Record</button>
          </div>
        )}
      </form>

      <div className={styles.filterContainer}>
        <label>
          Select Month:
          <select onChange={handleMonthChange} value={selectedMonth}>
            <option value="">-- Select a Month --</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={new Date(0, i).toLocaleString('default', { month: 'long' })}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedMonth && (
        <div>
          <h3>Records for {selectedMonth}</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cow Name</th>
                <th>Vaccination</th>
                <th>Treated</th>
                <th>Routine Check Up</th>
                <th>Parasite Control</th>
                <th>Deworming</th>
                <th>Cow Served</th>
              </tr>
            </thead>
            <tbody>
              {(recordsByMonth[selectedMonth] || []).map((record, index) => (
                <tr key={index}>
                  <td>{record.cow}</td>
                  <td>{record.vaccination ? `${record.vaccination.date} - $${record.vaccination.cost}` : 'N/A'}</td>
                  <td>{record.treated ? `${record.treated.date} - $${record.treated.cost}` : 'N/A'}</td>
                  <td>{record.checkUp ? `${record.checkUp.date} - $${record.checkUp.cost}` : 'N/A'}</td>
                  <td>{record.parasiteControl ? `${record.parasiteControl.date} - $${record.parasiteControl.cost}` : 'N/A'}</td>
                  <td>{record.deworming ? `${record.deworming.date} - $${record.deworming.cost}` : 'N/A'}</td>
                  <td>{record.cowServed ? `${record.cowServed.date} - $${record.cowServed.cost}` : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HealthRecords;
