import React, { useEffect, useState } from 'react';
import './website-poller.css';

function WebsitePoller({ websiteUrl, updateParentData }) {
    const [poller, setPoller] = useState(null);
    useEffect(() => {
        
    });

    if(websiteUrl !== null && websiteUrl !== undefined){
        return (
            <div>
                <p> Resource: {websiteUrl} </p>
                {
                    poller === null 
                    ? 
                    <input type="button" value="Start polling" onClick={() => {
                        let poller = setInterval(() => {
                            httpGetAsync(websiteUrl, (statusCode) => {
                                updateParentData(statusCode);
                            });
                        }, 5000); 
                        setPoller(poller);
                    }}></input>
                    :
                    <span>
                        <input type="button" value="Stop polling" onClick={() => {
                            clearInterval(poller);
                            setPoller(null);
                        }}></input>
                        <img className="spinnyspin" alt="test" src="data:image/png;base64,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"/>
                    </span>
                }
            </div>
        )
    }
    else return null;
}

function httpGetAsync(websiteUrl, callback)
{
    console.log("Requesting resource from " + websiteUrl)
    fetch(new Request(websiteUrl)).then(data => { // (websiteUrl), {mode:'no-cors'}
        console.log(data);
        callback(data.status);
    }).catch(() => {
        console.log("an error occured sending a GET request to " + websiteUrl);
        return 0;
    });
}

export default WebsitePoller;