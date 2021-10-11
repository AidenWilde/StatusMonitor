import { useEffect, useState } from "react";
import WebsiteStatusOverview from "./website-status-overview";

function StatusMonitorOverview() {
    let [websiteStatusOverviews, setWebsiteStatusOverviews] = useState([]);
    let [uniqueCount, setUniqueCount] = useState(0);

    useEffect(() => {
        setUniqueCount(websiteStatusOverviews.length += 1);
    }, [websiteStatusOverviews]);

    return (
        <div>
            <input type="button" value="Add new status monitor" onClick={() => {
               setWebsiteStatusOverviews([...websiteStatusOverviews, <WebsiteStatusOverview key={uniqueCount}/>]) 
            }}></input>
            {websiteStatusOverviews}
        </div>
        
    );
}

export default StatusMonitorOverview;