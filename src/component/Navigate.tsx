import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

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
                        <Link className="class-link" to='/add'></Link>
                        <Link className="class-link" to='/delete'></Link>
                        <Link className="class-link" to='/update'></Link>
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
        </div>
    );
}
