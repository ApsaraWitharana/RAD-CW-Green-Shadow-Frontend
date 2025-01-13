import { Link, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import "../style/Sidebar.css";
import {
    carOutline,
    eyeOutline,
    hammerOutline,
    homeOutline,
    leafOutline,
    logOutOutline,
    mapOutline,
    peopleOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";

export const Sidebar = () => {

    // const location = useLocation();
    // const { role, permissions } = location.state || {};
    //
    // // Handle unauthorized access
    // if (!role || !permissions) {
    //     return <div>Unauthorized Access</div>;
    // }

    // Route and icon mapping
    // const routes = {
    //     "/dashboard": { label: "Dashboard", icon: homeOutline },
    //     "/staff": { label: "Staff", icon: peopleOutline },
    //     "/field": { label: "Field", icon: mapOutline },
    //     "/crop": { label: "Crop", icon: leafOutline },
    //     "/equipment": { label: "Equipment", icon: hammerOutline },
    //     "/vehicle": { label: "Vehicle", icon: carOutline },
    //     "/monitoring": { label: "Monitoring", icon: eyeOutline },
    //     "/logout": { label: "Log Out", icon: logOutOutline },
    // };

    // Timer for the current time
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
                <div className="search-bar">
                    <p className="topic font-bold">Green Shadow PVT(LTD)</p>
                </div>
                <div className="date-time">
                    {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                </div>
                <img
                    src="src/assets/alina.jpg" // Ensure this path is correct
                    alt="User Profile"
                    className="profile-pic"
                />
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
                <ul className="sidebar-links">
                    {/*{permissions.map((path) => {*/}
                    {/*    const route = routes[path];*/}
                    {/*    if (route) {*/}
                    {/*        return (*/}
                    {/*            <li key={path}>*/}
                    {/*                <Link className="sidebar-link" to={path}>*/}
                    {/*                    <IonIcon className="icon" icon={route.icon}/> {route.label}*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*        );*/}
                    {/*    }*/}
                    {/*})}*/}
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
