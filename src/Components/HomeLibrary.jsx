import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeLibrary() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(`kutubxona/`);
    setData(response?.data?.results);
  };

  useEffect(() => {
    getData();
  }, []);

  let settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-5 items-center xl:px-5">
          <h2 className="text-[42px] font-semibold xl:text-[36px] md:text-[32px]">
            Kutubxona
          </h2>

          <button
            onClick={() => navigate("/library")}
            className="flex gap-3 mt-2 items-center text-red-700 font-semibold text-[20px] md:text-[18px]"
          >
            <span>Barchasi</span>
            <FaArrowRightLong className="mt-1 md:text-[16px] md:mt-0" />
          </button>
        </div>

        <div className="slider-container mt-6">
          <Slider {...settings}>
            {data?.map((value, index) => (
              <div key={index} className="">
                <div
                  key={index}
                  className="w-[94%] bg-white mx-auto group relative pb-2 sm:w-[90%]"
                >
                  <img
                    src={value?.image}
                    alt={value?.title_uz}
                    className="w-full h-[320px] object-cover sm:h-[280px]"
                  />
                  <button
                    className="h-[65px] before:ml-[7%] px-3 line-clamp-2 w-full text-[18px] font-semibold 
    before:content-[''] before:absolute before:left-0 before:bottom-2 before:h-[3px] 
    before:bg-black before:transition-all before:duration-300
    hover:before:w-[86%] before:w-0 sm:before:bottom-3 sm:px-5"
                  >
                    {value?.title_uz}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeLibrary;
