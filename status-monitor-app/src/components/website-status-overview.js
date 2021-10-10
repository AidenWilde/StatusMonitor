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
    
    
    // if(statusCode && website !== null && website !== undefined && website !== "") {
    //     if(statusCode === 200) {
    //         return <p>Website "{website}" currently available.</p>; 
    //     } 
    //     else { 
    //         return <p>Website "{website}" is unavailable with HTTP status code: {statusCode}</p> 
    //     }
    // }
    // else {
    //     return null;
    // }


export default WebsiteStatusOverview;