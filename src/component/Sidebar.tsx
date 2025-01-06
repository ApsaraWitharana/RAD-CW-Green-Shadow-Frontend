import {Link} from "react-router-dom";
import {IonIcon} from "@ionic/react";
import "../style/Sidebar.css";
import {
    carOutline,
    eyeOutline,
    hammerOutline,
    homeOutline,
    leafOutline, logOutOutline,
    mapOutline,
    peopleOutline
} from "ionicons/icons";
import {useEffect, useState} from "react";
export const Sidebar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="w-60 h-screen p-4">
            {/* Top Bar */}
            <div className="top-bar">
                {/* Search Bar */}
                <div className="search-bar">
                    <p className="topic font-bold">Green Shadow PVT(LTD)</p>
                </div>
                <div className="date-time">
                    {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                </div>
                <img src="src/assets/alina.jpg" alt="User Profile"
                     className="profile-pic"/>
            </div>

    {/* Sidebar */
    }
    <aside className="sidebar">
        <ul className="sidebar-links">
            <li><Link className="sidebar-link" to="/dashboard">
                <IonIcon className="icon" icon={homeOutline}/> Dashboard
            </Link>
            </li>
            <li><Link className="sidebar-link" to="/staff">
                <IonIcon className="icon" icon={peopleOutline}/> Staff
                    </Link>
                    </li>
                    <li><Link className="sidebar-link" to="/field">
                        <IonIcon className="icon" icon={mapOutline}/> Field
                    </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/crop">
                            <IonIcon className="icon" icon={leafOutline}/> Crop
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/equipment">
                            <IonIcon className="icon" icon={hammerOutline}/> Equipment
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/vehicle">
                            <IonIcon className="icon" icon={carOutline}/> Vehicle
                            </Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/monitoring">
                                <IonIcon className="icon" icon={eyeOutline}/> Monitoring
                            </Link>
                        </li>
                        <li>
                            <Link className="sidebar-link" to="/logout">
                                <IonIcon className="icon" icon={logOutOutline}/> Log Out
                            </Link>
                        </li>
                    </ul>
                </aside>
        </div>
);
};
