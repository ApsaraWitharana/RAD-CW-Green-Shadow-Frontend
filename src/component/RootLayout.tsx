
import {Navigation} from "./Navigate.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <main className="p-4">
                <Outlet></Outlet>
            </main>

        </>
    );
}
