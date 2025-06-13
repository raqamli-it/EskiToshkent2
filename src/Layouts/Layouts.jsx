import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layouts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-[180px] xl:pt-[150px] lg:pt-[140px] md:pt-[70px] sm:pt-[70px]">
        <Outlet />
        <div className="background"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Layouts;
