import React, { useEffect, useState } from 'react';
import WebsitePoller from './website-poller';
import WebsiteStatus from './website-status';

function WebsiteStatusOverview({propWebsiteUrl}) {
    const [websiteUrl, setWebsiteUrl] = useState(null);
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {
        setWebsiteUrl(propWebsiteUrl);
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