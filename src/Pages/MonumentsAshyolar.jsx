import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MonumentsAshyolar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    const respons = await axios.get(`/archaeologies/${id}/items/`);
    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full py-10 min-h-[75vh]">
      <div className="max-w-[1400px] mx-auto xl:px-5 grid grid-cols-4 gap-5 my-10 xl:grid-cols-3 lg:grid-cols-2 md:gap-3 sm:grid-cols-1 sm:gap-5">
        {data &&
          data?.map((item, index) => (
            <div
              onClick={() =>
                navigate(`/monumentsDetail/${id}/items/${item.id}`)
              }
              key={index}
              className="h-[400px] relative cursor-pointer rounded-[20px] overflow-hidden group"
            >
              <div className="h-[400px]">
                <img
                  src={item?.image}
                  alt={item?.title_uz}
                  className="w-full h-full group-hover:scale-110 duration-300"
                />
              </div>

              <div className="absolute h-[140px] bottom-0 w-full bg-[#0000009a] py-3 px-5 text-white grid justify-between">
                <p className="text-[20px]">{item?.title_uz}</p>

                <div className="flex items-center gap-3 font-serif">
                  <span
                    className="h-[60px] line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: item?.context_uz,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MonumentsAshyolar;
