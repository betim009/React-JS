import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar";

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout;