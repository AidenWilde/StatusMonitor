import React, { useEffect, useState } from 'react';

function WebsiteStatus({propsStatusCode}) {
    const [statusCode, setStatusCode] = useState(0);

    useEffect(() => {
        setStatusCode(propsStatusCode);
    }, [propsStatusCode])

    if(statusCode === 200) {
        return (
            <div>
                <p>Website currently available</p>
                <p>Status code: {statusCode}</p>    
            </div>
        ); 
    } 
    else { 
        return (
            <div>
                <p>Website currently unavailable</p>
                <p>Status code: {statusCode}</p>    
            </div>
        ); 
    }
}
    


export default WebsiteStatus;