import React, { useEffect, useState } from 'react';
import WebsitePoller from './website-poller';
import WebsiteStatus from './website-status';
import './website-status-overview.css';

function WebsiteStatusOverview() {
    const [websiteUrl, setWebsiteUrl] = useState(null);
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {
        if(websiteUrl === undefined) // temporary, incase input changes from defined to undefined
            setWebsiteUrl("");
    }, [websiteUrl, statusCode]);

    return (
        <div className="pagebreak">
            <p>Online resource to monitor:</p>
            <input type="text" id="websiteInput"></input>
            <input type="button" id="websiteInputSubmit" value="Update website to poll" onClick={() => {setWebsiteUrl(document.getElementById("websiteInput").value);}}></input>
            <WebsitePoller websiteUrl={websiteUrl} updateParentData={UpdateStatusFromChildComponent}/>
            <WebsiteStatus propsStatusCode={statusCode} />
        </div>
    )

    function UpdateStatusFromChildComponent(status) {
        console.log("parent component website-status status code updated")
        setStatusCode(status);
    }
}

export default WebsiteStatusOverview;