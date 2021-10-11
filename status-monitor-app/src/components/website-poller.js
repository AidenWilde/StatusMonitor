import React, { useEffect, useState } from 'react';

function WebsitePoller({ websiteUrl, updateParentData }) {
    const [poller, setPoller] = useState(null);
    useEffect(() => {
        
    });

    if(websiteUrl !== null && websiteUrl !== undefined){
        return (
            <div>
                <p> Resource: {websiteUrl} </p>
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
    fetch(websiteUrl).then(data => {
        console.log("got back: " + data.status)
        callback(data.status);
    }).catch(() => {
        console.log("an error occured sending a GET request to " + websiteUrl);
        return 0;
    });
}

export default WebsitePoller;