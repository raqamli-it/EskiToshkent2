import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = async () => {
    const response = await axios.get(`/news/${id}`);
    setData(response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "wwww");

  return (
    <div className="py-10 bg-white sm:pt-6">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="">
          <h2 className="text-[32px] font-medium text-[#323232c8] lg:leading-9 md:text-[26px] sm:text-[22px] sm:leading-7">
            {data?.title_uz}
          </h2>

          <div className="w-full h-[3px] bg-[#323232c8] my-[15px] xl:my-[10px]"></div>

          <div className="shadow-[0_0_10px_0_#a4a4a4] p-5 mt-10 xl:mt-8">
            <p
              dangerouslySetInnerHTML={{ __html: data?.context_uz }}
              className="text-black"
            ></p>

            <div className="h-[600px] w-full mt-5 lg:h-[500px] md:h-[400px]">
              <img
                decoding="async"
                loading="lazy"
                className="w-full h-full mx-auto"
                src={data?.image}
                alt={data?.title_uz}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
