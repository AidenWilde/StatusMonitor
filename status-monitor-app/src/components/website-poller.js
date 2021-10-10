import React, { useEffect, useState } from 'react';

function WebsitePoller({ websiteUrl, updateParentData }) {
    const [poller, setPoller] = useState(null);
    useEffect(() => {
        
    });

    if(websiteUrl !== null && websiteUrl !== undefined){
        return (
            <div>
                <p> WebsiteUrl: {websiteUrl} </p>
                <input type="button" value="Start polling" onClick={() => {
                    let poller = setInterval(() => {
                        httpGetAsync(websiteUrl, (statusCode) => {
                            updateParentData(statusCode);
                        });
                    }, 5000); 
                    setPoller(poller);
                }}></input>
            
            <input type="button" value="Stop polling" onClick={() => {
                clearInterval(poller);
            }}></input>
            </div>
        )
    }
    else return null;
}

function httpGetAsync(websiteUrl, callback)
{
    console.log("Requesting resource from " + websiteUrl)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4) { // 4 = DONE - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            callback(xmlHttp.status);
        }
    }
    xmlHttp.open("GET", websiteUrl, true);
    xmlHttp.send(null);
}

export default WebsitePoller;