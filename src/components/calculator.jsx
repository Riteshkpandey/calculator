import React, { useState } from "react";

const Calculator = () => {
  const [numbers, setNumber] = useState("");
  const [arr, setArr] = useState([]);
  const handleButton = (val) => {
    console.log(val);
    if (val >= 0) {
      const newNumber = numbers + val;
      setNumber((val) => val + newNumber);
      setArr((val) => val + numbers);
    } else {
      setArr([...arr, numbers, val]);
      console.log(arr);
    }
  };

  return (
    <div>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>1</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>2</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>3</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>4</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>5</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>6</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>7</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>8</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>9</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>0</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>+</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>-</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>*</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>/</button>
      <button onClick={(e) => handleButton(e.target.innerHTML)}>=</button>
      <div>display:{arr}</div>
    </div>
  );
};

export default Calculator;
