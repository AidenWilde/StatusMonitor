import React, { useEffect, useState } from 'react';
import './website-status.css';

function WebsiteStatus({propsStatusCode}) {
    const [statusCode, setStatusCode] = useState(null);

    useEffect(() => {
        setStatusCode(propsStatusCode);
    }, [propsStatusCode])

    if(statusCode === 200) {
        return (
            <div>
                <p>Status code: {statusCode}</p>    
                <p>🟢</p>
            </div>
        ); 
    } 
    else { 
        return (
            <div>
                <p>Status code: {statusCode}</p>    
                <p>🔴</p>
            </div>
        ); 
    }
}
    
export default WebsiteStatus;