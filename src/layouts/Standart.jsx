import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function StandardLayout(){

    return(
        <>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
        </>

    )
}