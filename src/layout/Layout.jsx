import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="bodyContainer">
        <img
          className="logo"
          src="logo.png"
          onClick={() => navigate("/abhi")}
        />
      </div>
      <div className="foot-body">
        <div className="bodyContainer">
          <Outlet />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
}
