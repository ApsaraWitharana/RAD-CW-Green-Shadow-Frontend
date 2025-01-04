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
            <header className="top-nav bg-slate-700 w-full">
                <nav className="px-4 py-2 flex justify-between items-center text-white">
                    <div className="flex items-center space-x-4">
                        <div className="text-white">
                            {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
                        </div>
                        <img src="/src/assets/" alt="User Profile"
                             className="w-10 h-10 rounded-full border border-white"/>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-500">Sign In
                        </button>
                    </div>
                </nav>
            </header>

            {/* Sidebar */}
            <aside className="sidebar bg-gray-800 text-white">
                <ul className="space-y-4 px-4 py-6">
                    <li>
                        <Link className="sidebar-link" to="/">
                            <IonIcon icon={homeOutline}/> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/staff">
                            <IonIcon icon={peopleOutline}/> Staff
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/field">
                            <IonIcon icon={mapOutline} /> Field
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/crop">
                            <IonIcon icon={leafOutline} /> Crop
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/equipment">
                            <IonIcon icon={hammerOutline} /> Equipment
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/vehicle">
                            <IonIcon icon={carOutline} /> Vehicle
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/monitoring">
                            <IonIcon icon={eyeOutline} /> Monitoring
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/logout">
                            <IonIcon icon={logOutOutline} /> Log Out
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content p-4">
                <h2>Welcome to the Dashboard</h2>
                <p>Here is the main content area.</p>
            </main>
        </div>
    );
}
