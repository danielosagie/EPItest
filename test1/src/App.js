import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [enzymeDosage, setEnzymeDosage] = useState('');
  const [result, setResult] = useState('');

  const calculateDosage = () => {
    const parsedWeight = parseFloat(weight);
    const parsedEnzymeDosage = parseFloat(enzymeDosage);

    if (!isNaN(parsedWeight) && !isNaN(parsedEnzymeDosage)) {
      const dosageResult = parsedWeight * parsedEnzymeDosage;
      setResult(`Your recommended enzyme dosage is: ${dosageResult} units.`);
    } else {
      setResult('Please enter valid numeric values.');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>EPI Information</h1>
      </header>

      <section id="about-epi">
        <h2>About EPI</h2>
        <p>
          Exocrine Pancreatic Insufficiency (EPI) is a condition where the pancreas does not produce enough enzymes to properly digest food. This can lead to various digestive issues.
        </p>
      </section>

      <section id="dosage-calculator">
        <h2>Dosage Calculator</h2>
        <form>
          <label htmlFor="weight">Enter your weight (in kg):</label>
          <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />

          <label htmlFor="enzyme-dosage">Enter your enzyme dosage:</label>
          <input type="number" id="enzyme-dosage" name="enzyme-dosage" value={enzymeDosage} onChange={(e) => setEnzymeDosage(e.target.value)} required />

          <button type="button" onClick={calculateDosage}>Calculate</button>
        </form>

        <div id="result">
          <p>{result}</p>
        </div>
      </section>

      <section id="additional-resources">
        <h2>Additional Resources</h2>
        <p>For more information on EPI, please visit:</p>
        <ul>
          <li><a href="#">EPI Foundation</a></li>
          <li><a href="#">National Institute of Diabetes and Digestive and Kidney Diseases</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
