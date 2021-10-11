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
            <input type="text" onKeyUp={($event) => {
                setWebsiteUrl($event.target.value);
            }}></input>
            {
                websiteUrl !== null && websiteUrl !== undefined && websiteUrl !== "" ? (
                    <div>
                        <WebsitePoller websiteUrl={websiteUrl} updateParentData={UpdateStatusFromChildComponent}/>
                        <WebsiteStatus propsStatusCode={statusCode} />
                    </div>
                )
                 : null
            }
        </div>
    )

    function UpdateStatusFromChildComponent(status) {
        console.log("parent component website-status status code updated")
        setStatusCode(status);
    }
}

export default WebsiteStatusOverview;