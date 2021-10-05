import React, { useEffect, useState } from 'react';

function Status({ website }) {
    const [value, setValue] = useState(false);
    useEffect(() => {
        if(website) {
            httpGetAsync(website, (status) => {
                setValue(status);
            });
        }
    });

    if(value && website !== null && website !== undefined && website !== "") {
        if(value) {
            return <p>Website "{website}" available with HTTP status code: {value}</p>;
        } else {
            return <p>Website "{website}" is unavailable with HTTP status code: {value}</p>
        }
    }
    else {
        return null;
    }
}

function httpGetAsync(websiteUrl, callback)
{
    console.log("making http request to " + websiteUrl)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4) { // 4 = DONE - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            callback(xmlHttp.status);
        }
    }
    xmlHttp.open("GET", websiteUrl, true);
    xmlHttp.send(null);
}

export default Status;