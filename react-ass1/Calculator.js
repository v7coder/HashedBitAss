// Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, num) => {
    const value = e.target.value;
    num === 1 ? setNum1(value) : setNum2(value);
  };

  const handleCalculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number1 / number2);
        break;
      default:
        setResult('Invalid Operator');
    }
  };

  return (
    <div className="calculator">
      <input type="number" value={num1} onChange={(e) => handleInputChange(e, 1)} />
      <input type="number" value={num2} onChange={(e) => handleInputChange(e, 2)} />
      <div className="buttons">
        <button onClick={() => handleCalculate('+')}>Add</button>
        <button onClick={() => handleCalculate('-')}>Subtract</button>
        <button onClick={() => handleCalculate('*')}>Multiply</button>
        <button onClick={() => handleCalculate('/')}>Divide</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
