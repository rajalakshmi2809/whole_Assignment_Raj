import React, { useState } from "react";

const PrimeNumbers = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    const n = Number(number);

    if (n < 2) {
      setResult("Not Prime");
      return;
    }

    let isPrime = true;

    
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    setResult(isPrime ? "Prime Number" : "Not Prime");
  };

  return (
    <div>
      <h1 className="font-bold">Prime Number Checker</h1>

      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
       className="bg-white text-black border-black"/>

      <button  className="font-bold" onClick={checkPrime}>Check</button>

      <h2 className="font-bold">Result: {result}</h2>
    </div>
  );
};

export default PrimeNumbers