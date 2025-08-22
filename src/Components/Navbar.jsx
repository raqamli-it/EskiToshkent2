import navbarimg from "../assets/images/navbar.webp";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/et.webp";
import { Fade } from "react-awesome-reveal";
import Time from "../Headers/Time";
import DateSwitcher from "../Headers/DateSwitcher";
import GlobalSearch from "../Headers/GlobalSearch";
import { useState } from "react";
import "./navbar.css";

// import WeatherApp from "../Headers/WeatherApp";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [close, setClose] = useState(true);

  const openButton = () => {
    setToggle((prev) => !prev);
  };

  const CloseBox = () => {
    setClose(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 md:px-5 navbar_container">
      {close ? (
        <div className="wrapper">
          <ul className="text md:hidden">
            <li>
              <span>Sayt sinov yo‘sinida ishlamoqda!</span>
            </li>
            <button onClick={CloseBox}>
              <MdClose className="text-[24px] text-white" />
            </button>
          </ul>
        </div>
      ) : (
        <h1 className="opacity-0">ss</h1>
      )}

      <div
        className={`${
          toggle
            ? "right-0 duration-500 ease-in"
            : "-right-[100%] duration-500 ease-in"
        }
    max-w-[1400px] mx-auto flex items-center justify-end gap-5 py-[14px] h-[70px] xl:gap-3 xl:px-5 md:absolute md:flex-col md:top-[107px] md:h-[170px] md:py-0 md:p-3 md:w-full md:bg-[#192957] sm:top-[92px]`}
      >
        <div className="hidden md:block h-full w-[25%] lg:w-[35%] md:w-full md:pb-3 md:mt-5">
          <GlobalSearch />
        </div>
        <Time />
        <DateSwitcher />
        <div className="md:hidden h-full w-[25%] lg:w-[35%] md:w-full md:pb-3">
          <GlobalSearch />
        </div>
        {/* <WeatherApp /> */}
      </div>

      <div className="max-w-[1400px] mx-auto flex items-end justify-between xl:px-5 pb-5">
        <Link to="/" className="w-[100px] lg:w-[90px] md:w-[80px] sm:w-[70px]">
          <img src={logo} alt="logo" className="" />
        </Link>

        <Fade
          delay={200}
          duration={1000}
          fraction={0.5}
          direction={"right"}
          triggerOnce
          cascade
          className={`${
            toggle
              ? "right-0 duration-500 ease-in"
              : "-right-[100%] duration-500 ease-in"
          } md:bg-[#192957] md:top-[276px] md:absolute md:w-full duration-500 ease-in sm:top-[260px]`}
        >
          <div className="flex gap-[20px] text-white text-[20px] relative tracking-[2px] xl:text-[18px] lg:text-[15px] lg:gap-4 md:flex-col md:p-3">
            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/news"
            >
              Yangiliklar
            </NavLink>

            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/monuments"
            >
              Yodgorliklar
            </NavLink>

            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/artifacts"
            >
              Ashyolar
            </NavLink>

            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/museums"
            >
              Muzeylar
            </NavLink>

            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/library"
            >
              Kutubxona
            </NavLink>

            <NavLink
              onClick={openButton}
              className={({ isActive }) =>
                `hover:text-green-500 transition-all duration-300 relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-green-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 md:before:h-0 md:text-[16px] ${
                  isActive ? "text-green-500 before:scale-x-100" : ""
                }`
              }
              to="/about"
            >
              Biz haqimizda
            </NavLink>
          </div>
        </Fade>

        <button onClick={openButton} className="hidden md:block cursor-pointer">
          {toggle ? (
            <RiCloseLargeLine className="text-[22px] text-white" />
          ) : (
            <HiMenu className="text-[26px] text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
