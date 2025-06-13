import { GrInstagram } from "react-icons/gr";
import { PiTelegramLogoBold } from "react-icons/pi";
import { TfiFacebook } from "react-icons/tfi";
import { BiSolidToTop } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = useCallback((duration = 500) => {
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <div className="bg-black w-full py-10 sm:py-7">
      <div className="max-w-[1400px] text-white mx-auto flex justify-between items-center xl:px-5 sm:flex-col sm:gap-y-5">
        <h3 className="text-[24px] md:text-[20px]">
          Toshkent arxeologiya yodgorliklari
        </h3>

        <div className="flex items-center gap-5 md:gap-3">
          <a
            href="#"
            className="w-[42px] h-[42px] rounded-full bg-white grid place-items-center hover:bg-green-500 md:w-[36px] md:h-[36px]"
          >
            <GrInstagram className="text-[#000000e7] text-[18px] md:text-[14px]" />
          </a>

          <a
            href="#"
            className="w-[42px] h-[42px] rounded-full bg-white grid place-items-center hover:bg-green-500 md:w-[36px] md:h-[36px]"
          >
            <PiTelegramLogoBold className="text-[#000000e7] text-[18px] md:text-[15px]" />
          </a>

          <a
            href="#"
            className="w-[42px] h-[42px] rounded-full bg-white grid place-items-center hover:bg-green-500 md:w-[36px] md:h-[36px]"
          >
            <TfiFacebook className="text-[#000000e7] text-[18px] md:text-[14px]" />
          </a>

          <a
            onClick={() => scrollToTop(500)}
            className="w-[42px] h-[42px] rounded-full grid place-items-center cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 md:w-[36px] md:h-[36px]"
          >
            <BiSolidToTop className="text-white text-[20px] md:text-[16px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
