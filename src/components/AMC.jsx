import { useState } from 'react';
export default function AMC() {
    //make variables to save the input and output
    const [arrayInput, setArrayInput] = useState('');
    const [targetSum, setTargetSum] = useState('');
    const [result, setResult] = useState([]);
    //to find pair total numbers are same as the target sum     
    const findPairs = (arr, targetSum) => {
      const pairs = [];
      const seen = new Set();
  
      for (let num of arr) {
        const difference = targetSum - num;
  
        if (seen.has(difference)) {
          pairs.push([difference, num]);
        }
  
        seen.add(num);
      }
  
      return pairs;
    };
    // Handle initialize the ArrayInput each time the input is changed
    const handleArrayChange = (event) => {
      setArrayInput(event.target.value);
    };
   // Handle initialize the TargetSum each time the input is changed
    const handleTargetSumChange = (event) => {
      setTargetSum(event.target.value);
    };
    //Handle that run after the submit button is clicked
    const handleSubmit = () => {
      const arr = arrayInput.split(',').map(Number);
      const sum = parseInt(targetSum, 10);
      const pairs = findPairs(arr, sum);
      setResult(pairs);
    };
  
    return (
      <>
        <div>
          <h3>Array Manipulation Challenge</h3>
          <input
            type="text"
            value={arrayInput}
            onChange={handleArrayChange}
            placeholder="Enter numbers by commas"
          />
          <input
            type="number"
            value={targetSum}
            onChange={handleTargetSumChange}
            placeholder="Enter target sum"
          />
          <button onClick={handleSubmit}>Find Pairs</button>
          {result.length > 0 && (
            <div>
              <h4>Pairs that sum to {targetSum}:</h4>
              <ul>
                {result.map((pair, index) => (
                  <li key={index}>{`[${pair[0]}, ${pair[1]}]`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
}