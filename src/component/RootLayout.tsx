import { useContext } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import {SidebarContext} from "./context/SidebarContext.tsx";

export function RootLayout() {
    const { isSidebarOpen } = useContext(SidebarContext);

    return (
        <div className="root-layout">
                <Sidebar />
                <div className={`content ${isSidebarOpen ? "with-sidebar" : ""}`}>
                    <Outlet />
                </div>

        </div>
    );
}
