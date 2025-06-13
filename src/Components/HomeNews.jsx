import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomeNews() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("/news/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-10 w-full bg-[#f1ebeb38] xl:pt-4">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="flex gap-5 items-center">
          <h2 className="text-[42px] font-semibold xl:text-[36px] md:text-[32px]">
            Yangiliklar
          </h2>

          <button
            onClick={() => navigate("/news")}
            className="flex gap-3 mt-2 items-center text-red-700 font-semibold text-[20px] md:text-[18px]"
          >
            <span>Barchasi</span>
            <FaArrowRightLong className="mt-1 md:text-[16px] md:mt-0" />
          </button>
        </div>

        <div className="my-6 grid grid-cols-2 gap-5 xl:mb-0 lg:grid-cols-1">
          {data?.map((value, index) => (
            <div
              key={index}
              className="flex rounded-[20px] overflow-hidden bg-gray-600 group sm:flex-col"
            >
              <div className="w-3/5 h-[360px] xl:h-[300px] sm:w-full sm:h-[260px]">
                <img
                  src={value?.image}
                  alt={value?.title_uz}
                  className="h-full"
                />
              </div>

              <div className="flex flex-col justify-between w-2/5 p-5 xl:p-3 sm:w-full">
                <h2 className="text-[20px] text-black transition-colors duration-300 ease-in-out group-hover:text-white xl:text-[16px] xl:leading-5 sm:text-[18px] sm:leading-6">
                  {value?.title_uz}
                </h2>
                <div className="flex justify-between items-center sm:mt-4">
                  <span className="text-[18px] text-black transition-colors duration-300 ease-in-out group-hover:text-white xl:text-[14px]">
                    {value?.update.substring(0, 10).split("-").join(".")}
                  </span>

                  <button
                    onClick={() => navigate(`/newsDetail/${value?.id}`)}
                    className="bg-[#007BFF] text-[18px] tracking-[2px] shadow-[0_0_4px_0_#a4a4a4] group-hover:shadow-[0_0_12px_0_#a4a4a4] text-white py-[6px] px-3 rounded-[16px] transition-all duration-200 ease-in group-hover:ease-in xl:text-[14px]"
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
