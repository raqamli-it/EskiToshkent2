import { RiCloseLargeLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/et.webp";
import { Fade } from "react-awesome-reveal";
import Time from "../Headers/Time";
import DateSwitcher from "../Headers/DateSwitcher";
import GlobalSearch from "../Headers/GlobalSearch";
import { useEffect, useState } from "react";
import "./navbar.css";

// import WeatherApp from "../Headers/WeatherApp";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [close, setClose] = useState(true);
  const [removeClass, setRemoveClass] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 768 ? setRemoveClass(false) : setRemoveClass(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openButton = () => {
    setToggle((prev) => !prev);
  };

  const CloseBox = () => {
    setClose(false);
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 md:xl-5 ${
        removeClass ? "navbar_container" : "bg-[#192957]"
      }`}
    >
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
        <h1 className="opacity-0"></h1>
      )}

      <div
        className={`max-w-[1400px] mx-auto w-full md:hidden h-[45px] flex items-center justify-end gap-5 mt-4 xl:gap-3 xl:px-5`}
      >
        <GlobalSearch />

        <Time />

        <DateSwitcher />

        {/* <WeatherApp /> */}
      </div>

      <div className="max-w-[1400px] mx-auto flex items-end justify-between xl:px-5 pb-5 md:hidden">
        <div className="flex items-end">
          <Link
            to="/"
            className="w-[100px] lg:w-[90px] md:w-[80px] sm:w-[70px]"
          >
            <img src={logo} alt="logo" />
          </Link>

          <h2 className="relative bottom-2 -left-3 text-green-700 font-semibold tracking-[2px] text-[20px] md:text-[18px] md:text-white sm:text-[16px]">
            Eskitoshkent.uz
          </h2>
        </div>

        <Fade
          delay={200}
          duration={1000}
          fraction={0.5}
          direction={"up"}
          triggerOnce
          cascade
          className={`duration-500 ease-in`}
        >
          <div className="flex gap-[20px] text-white text-[20px] relative tracking-[2px] xl:text-[18px] lg:text-[15px] lg:gap-4">
            <NavLink
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
      </div>

      {/* md dan kichkina xolatidagi code */}

      <div className={`hidden md:block relative px-[10px]`}>
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-end">
            <Link
              to="/"
              className="w-[100px] lg:w-[90px] md:w-[80px] sm:w-[70px]"
            >
              <img src={logo} alt="logo" />
            </Link>

            <h2 className="relative bottom-2 -left-3 text-green-700 font-semibold tracking-[2px] text-[20px] md:text-[18px] md:text-white sm:text-[16px]">
              Eskitoshkent.uz
            </h2>
          </div>

          <button
            onClick={openButton}
            className="hidden md:block cursor-pointer"
          >
            {toggle ? (
              <RiCloseLargeLine className="text-[22px] text-white" />
            ) : (
              <HiMenu className="text-[26px] text-white" />
            )}
          </button>
        </div>

        <div
          className={`${
            toggle ? "right-0" : "-right-[100%]"
          } absolute w-full top-[70px] px-[10px] bg-[#192957] duration-500 ease-in-out`}
        >
          <div>
            <GlobalSearch />

            <Time />

            <DateSwitcher />

            {/* <WeatherApp /> */}
          </div>

          <div className="flex flex-col py-5">
            <NavLink
              onClick={openButton}
              to="/news"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Yangiliklar
            </NavLink>

            <NavLink
              onClick={openButton}
              to="/monuments"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Yodgorliklar
            </NavLink>

            <NavLink
              onClick={openButton}
              to="/artifacts"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Ashyolar
            </NavLink>

            <NavLink
              onClick={openButton}
              to="/museums"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Muzeylar
            </NavLink>

            <NavLink
              onClick={openButton}
              to="/library"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Kutubxona
            </NavLink>

            <NavLink
              onClick={openButton}
              to="/about"
              className="h-[48px] text-white flex items-center text-[18px]"
            >
              Biz haqimizda
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
