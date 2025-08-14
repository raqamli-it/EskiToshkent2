import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function News() {
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

  console.log(data, "DATA");

  return (
    <div className="py-10 w-full bg-[#f1ebeb13]">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="">
          <h2 className="text-[36px] font-semibold text-[#9f9f9fc8] xl:text-[36px] md:text-[32px]">
            Yangiliklar
          </h2>

          <div className="w-full h-[3px] bg-[#9f9f9fc8] my-[20px] xl:my-[10px]"></div>
        </div>

        <div className="my-10 grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-y-3 md:gap-6">
          {data
            ?.sort((a, b) => b.order - a.order)
            .map((value, index) => (
              <div
                onClick={() => navigate(`/newsDetail/${value.id}`)}
                key={index}
                className="flex rounded-[20px] overflow-hidden bg-[#717171a4] group sm:flex-col"
              >
                <div className="w-3/5 h-[360px] md:h-[340px] sm:w-full sm:h-[280px]">
                  <img
                    src={value?.image}
                    alt={value?.title_uz}
                    className="h-full w-full transition duration-500 ease-in-out object-cover group-hover:scale-90"
                  />
                </div>

                <div className="flex flex-col justify-between w-2/5 p-5 xl:p-3 sm:w-full">
                  <div>
                    <h2 className="text-[20px] text-black transition-colors duration-300 ease-in-out group-hover:text-white xl:leading-6 lg:leading-7">
                      {value?.title_uz}
                    </h2>

                    <p
                      dangerouslySetInnerHTML={{ __html: value?.context_uz }}
                      className="line-clamp-3 text-black transition-colors duration-300 ease-in-out group-hover:text-white"
                    ></p>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[18px] text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white sm:mt-3">
                      {value?.update.substring(0, 10).split("-").join(".")}
                    </span>

                    <button className="text-green-900 font-serif text-[18px] leading-5 group-hover:text-white p-0 border-b-[1px] border-green-900 group-hover:border-white">
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

export default News;
