import React, { useEffect, useState } from 'react';
import WebsitePoller from './website-poller';
import WebsiteStatus from './website-status';
import './website-status-overview.css';

function WebsiteStatusOverview() {
    const [websiteUrl, setWebsiteUrl] = useState(null);
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {

    });

    return (
        <div>
            <br/>
            <p>Website URL to monitor:</p>
            <input type="text" id="websiteInput"></input>
            <input type="button" id="websiteInputSubmit" onClick={() => { setWebsiteUrl(document.getElementById("websiteInput").value); }} value="Update website to poll"></input>
            <WebsitePoller websiteUrl={websiteUrl} updateParentData={ UpdateStatusFromChildComponent }/>
            <WebsiteStatus propsStatusCode={statusCode} />
        </div>
    )

    function UpdateStatusFromChildComponent(status) {
        console.log("parent component website-status status code updated")
        setStatusCode(status);
    }
}

export default WebsiteStatusOverview;