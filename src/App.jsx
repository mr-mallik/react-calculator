import React, { useState } from "react";

import "./App.css";

function App() {
  var eval_result = 0;
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    var clickedValue = value.btnName;
    setResult(result + clickedValue);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleEquals = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    "+",
    "-",
    "/",
    "*",
    ".",
    "%",
  ];

  return (
    <div className="calc">
      <h1>Simple Calculator</h1>
      <input type="text" placeholder="0" id="answer" defaultValue={result} />
      {buttons.map((btnName, i) => (
        <input
          key={i}
          type="button"
          defaultValue={btnName}
          onClick={() => handleButtonClick({ btnName })}
          className="button"
        />
      ))}

      <input
        type="button"
        defaultValue="AC"
        onClick={() => handleClear()}
        className="button1"
      />
      <input
        type="button"
        defaultValue="="
        onClick={() => handleEquals()}
        className="button1"
      />
    </div>
  );
}

export default App;