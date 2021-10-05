import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("");

  return (
    <div class="App">
      <h1 class="AppTitle"> Status Monitor </h1>
      <input type="text" id="websiteInput"></input>
      <input type="button" id="websiteInputSubmit" onClick={() => {
        let inputValue = document.getElementById("websiteInput").value;
        setValue(inputValue);
        alert(inputValue);
      }} value="Setup"></input>
    </div>
  );
}


function handleInputChange(event) {
  
}

export default App;
