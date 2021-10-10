import React, { useEffect, useState } from 'react';
import WebsitePoller from './website-poller';

function WebsiteStatus({ websiteUrl }) {
    const [props, setPropsValue] = useState({websiteUrl: websiteUrl, statusCode: null});
    useEffect(() => {
        console.log("props changed in website-status.js"); // these aren't getting values passed down properly
        console.log("prop websiteUrl: " + props.websiteUrl); 
        console.log("prop statusCode: " + props.statusCode);
    })

    if(props.websiteUrl !== null && props.websiteUrl !== undefined) {
        return (
            <div>
                <WebsitePoller websiteUrl={ props.websiteUrl } updateParentData={ UpdateStatusFromChildComponent }/>
                <p> Status code: {props.statusCode} </p>
            </div>
        )
    } else return null;
    
    
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

    function UpdateStatusFromChildComponent(status) {
        console.log("parent component website-status status code updated")
        setPropsValue(prevState => ({
            ...prevState,
            statusCode: status
        }));
    }
}

export default WebsiteStatus;