import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    if(value) {
      console.log("value updated: " + value);
    }
  });

  return (
    <div className="App">
      <h1 className="AppTitle"> Status Monitor </h1>
      <input type="text" id="websiteInput"></input>
      <input type="button" id="websiteInputSubmit" onClick={() => {
        let inputValue = document.getElementById("websiteInput").value;
        setValue(inputValue);
      }} value="Setup"></input>
    </div>
  );
}

export default App;
