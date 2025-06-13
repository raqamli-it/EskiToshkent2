import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Library() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const respons = await axios.get(`kutubxona/`);
    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data, "xxxx");

  return (
    <div className="py-10 w-full bg-[#f1ebeb13]">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="">
          <h2 className="text-[42px] font-semibold text-[#9f9f9fc8] xl:text-[36px] md:text-[32px] sm:text-[26px]">
            Kutubxona
          </h2>

          <div className="w-full h-[3px] bg-[#9f9f9fc8] my-[20px] xl:my-[10px]"></div>
        </div>

        <div className="grid grid-cols-4 gap-5 my-10 xl:grid-cols-3 lg:grid-cols-2 md:gap-3 sm:grid-cols-1 sm:gap-5">
          {data?.results?.map((value, index) => (
            <div
              key={index}
              className="h-[400px] rounded-[20px] overflow-hidden relative group sm:h-[340px]"
            >
              <Link to="/">
                <img
                  loading="lazy"
                  decoding="async"
                  src={value?.image}
                  alt={value?.title_uz}
                  className="h-full w-full transition duration-500 ease-in-out group-hover:scale-110"
                />
              </Link>
              <div className="leading-[28px] duration-300 group-hover:duration-300 bg-[#E5E5E5] group-hover:text-black w-full h-[85px] absolute bottom-0 justify-center flex items-center flex-col text-[18px] px-2 line-clamp-1 sm:h-[75px]">
                <Link to="/" className="font-semibold h-[28px] line-clamp-1">
                  {value?.title_uz}
                </Link>

                <a
                  target="_blank"
                  href={value?.file}
                  className="flex items-center gap-3 text-[#6a1717d6]"
                >
                  <span className="text-[16px] font-semibold">
                    Ko'proq o'qish
                  </span>
                  <FaArrowRightLong className="mt-1 text-[16px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
