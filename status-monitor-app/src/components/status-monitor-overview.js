import { useEffect, useState } from "react";
import WebsiteStatusOverview from "./website-status-overview";

function StatusMonitorOverview() {
    const [websiteStatusOverviews, setWebsiteStatusOverviews] = useState([]);

    return (
        <div>
            <input type="button" value="Add new status monitor" onClick={() => {
               setWebsiteStatusOverviews([...websiteStatusOverviews, <WebsiteStatusOverview />]) 
            }}></input>
            {websiteStatusOverviews}
        </div>
        
    );
}

export default StatusMonitorOverview;