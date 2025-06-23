import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MonumentsAshyolarDetail() {
  const { id, itemsId } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const respons = await axios.get(`/archaeologies/${id}/items/${itemsId}`);
    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "QQQQQQQQQQQQQ");

  return (
    <div className="w-full py-10 min-h-[75vh] bg-white">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div>
          <h2 className="text-[38px] text-gray-700 md:text-[30px]">
            {data?.title_uz}
          </h2>
          <div className="w-full h-[2px] bg-gray-700"></div>
        </div>

        <div className="my-10 mb-10 md:flex md:flex-col">
          <div className="h-[400px] w-[35%] float-left mr-6 lg:w-1/2 md:w-3/4 md:mx-auto md:mb-5 sm:w-full">
            <img
              src={data?.image}
              alt={data?.title_uz}
              className="w-[100%] h-[400px]"
            />
          </div>
          <p
            className="min-h-[400px]"
            dangerouslySetInnerHTML={{
              __html: data?.context_uz,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default MonumentsAshyolarDetail;
