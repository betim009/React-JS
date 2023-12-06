import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

function LayOut() {
    return (
        <>

            <NavBar />
            <Outlet />
            <Footer />


        </>
    )
}


export default LayOut;