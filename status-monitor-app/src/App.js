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
      <div>
        <p> Enter a website URL to monitor: </p>
        <input type="text" id="websiteInput"></input>
        <input type="button" id="websiteInputSubmit" onClick={() => { setValue(document.getElementById("websiteInput").value); }} value="Setup monitor"></input>
      </div>
    </div>
  );
}

export default App;
