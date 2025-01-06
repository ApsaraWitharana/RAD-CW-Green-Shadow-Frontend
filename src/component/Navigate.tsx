import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";
import {
    carOutline,
    eyeOutline,
    hammerOutline,
    homeOutline,
    leafOutline, logOutOutline,
    mapOutline,
    peopleOutline
} from "ionicons/icons";
import {IonIcon} from "@ionic/react";
export function Navigation() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="layout">
            {/* Top Navigation */}
            <header className="top-nav">
                <nav className="px-4 py-2 text-xl shadow-lg flex justify-between items-center">
                    {/* Center Section */}
                    <ul className="flex text-white space-x-4">
                        <p className="class-link text-green-500">Green Shadow PVT(LTD)</p>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here.."/>
                            </label>
                        </div>
                    </ul>
                    {/* Right Section */}
                    <div className="flex items-center space-x-7">
                        <div className="text-white py-2">
                            {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                        </div>
                        <img src="src/assets/alina.jpg" alt="User Profile"
                             className="w-10 h-10 rounded-full border border-white"/>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-500">Sign In
                        </button>
                    </div>
                </nav>
            </header>
            {/* Sidebar */}
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
}
