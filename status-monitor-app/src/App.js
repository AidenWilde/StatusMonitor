import './App.css';
import WebsiteStatusOverview from './components/website-status-overview.js'
import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log("value updated in App.js: " + value);
  });

  return (
    <div className="App">
      <h1 className="AppTitle"> Status Monitor </h1>
      <div>
        <p> Enter a website URL to monitor: </p>
        <input type="text" id="websiteInput"></input>
        <input type="button" id="websiteInputSubmit" onClick={() => { setValue(document.getElementById("websiteInput").value); }} value="Update website to poll"></input>
        <WebsiteStatusOverview propWebsiteUrl={value}/>
      </div>
    </div>
  );
}

export default App;
