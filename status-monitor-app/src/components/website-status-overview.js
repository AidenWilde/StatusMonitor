import React, { useEffect, useState } from 'react';
import WebsitePoller from './website-poller';
import WebsiteStatus from './website-status';

function WebsiteStatusOverview({propWebsiteUrl}) {
    const [websiteUrl, setWebsiteUrl] = useState(null);
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {
        setWebsiteUrl(propWebsiteUrl);
        console.log("props changed in website-status.js"); // these aren't getting values passed down properly
        console.log("prop websiteUrl: " + propWebsiteUrl); 
        console.log("prop statusCode: " + statusCode);
    }, [propWebsiteUrl, statusCode])

    return (
        <div>
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