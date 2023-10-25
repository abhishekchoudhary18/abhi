import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {

    return <>
    <div className="headerContainer"><Header/></div>
    <div className="foot-body">
    <div className="bodyContainer"><Outlet/></div>
    <div className="footerContainer"><Footer/></div>
    </div>
    </>
}