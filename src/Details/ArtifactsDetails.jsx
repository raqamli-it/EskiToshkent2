import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArtifactsDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    const respons = await axios.get(`items/${id}`);
    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "xxxx");

  return (
    <div className="w-full py-10">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <h3 className="text-center mb-5 text-[32px] font-medium">
          {data?.title_uz}
        </h3>

        <div className="grid grid-cols-[1fr_2fr] items-start gap-5 justify-between bg-white rounded-[20px] p-5 lg:grid-cols-1">
          <div className="h-[320px]">
            <img
              loading="lazy"
              decoding="async"
              src={data?.image}
              alt={data?.title_uz}
              className="w-full lg:h-full h-[320px] lg:object-contain sm:object-none"
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: data?.context_uz }}></div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactsDetails;
