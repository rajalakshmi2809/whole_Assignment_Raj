import React, { useState } from "react";

const LargeArray = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const generateArray = () => {
    return Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 1000)
    );
  };

  const processArray = () => {
    const newArray = generateArray();
    setNumbers(newArray);

    const evenNumbers = newArray.filter(num => num % 2 === 0);
    const total = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    setSum(total);
  };

  return (
    <div>
      <h1 className="font-bold mb-2">Large Array Filtering</h1>

      <button onClick={processArray} className="bg-purple-600 p-2 rounded-2xl mb-2">
        calculate
      </button>

      <h2 className="font-bold">Sum of Even Numbers: {sum}</h2>
    </div>
  );
};

export default LargeArray;