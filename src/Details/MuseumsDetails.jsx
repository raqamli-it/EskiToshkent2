import axios from "axios";
import { IoPlay } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MuseumsDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [openVideo, setOpenVideo] = useState(false);

  const getData = async () => {
    const respons = await axios.get(`muzeylar/${id}`);
    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const OpenVideoBtn = () => {
    setOpenVideo((prev) => !prev);
  };

  function extractVideoId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <div className="w-full py-10 bg-white min-h-[75vh]">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="">
          <h2 className="text-[36px] font-semibold text-[#9f9f9fc8] xl:text-[32px] md:text-[26px] xl:leading-7 sm:text-[22px] sm:leading-6">
            {data?.title_uz}
          </h2>

          <div className="w-full h-[3px] bg-[#9f9f9fc8] my-[20px] xl:my-[10px]"></div>
        </div>

        <div className="border-[2px] rounded-[12px] shadow-[0_0_6px_#1f1f1f] my-10 grid place-items-center h-[500px] xl:mt-8 md:h-[450px] lg:mb-5">
          {openVideo ? (
            <div className="h-[500px] p-5 w-3/4 rounded-[20px] relative lg:w-4/5 md:w-[90%] md:h-[450px] sm:w-full">
              {data?.video_link == null && data?.video_link == null ? (
                <div className="h-full relative">
                  <img
                    src={data?.image}
                    alt={data?.title_uz}
                    className="w-full h-full rounded-[20px]"
                  />
                  <button
                    onClick={OpenVideoBtn}
                    className="w-16 h-16 rounded-full grid place-items-center bg-[#000000be] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <IoPlay className="text-[32px] text-blue-800" />
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${extractVideoId(
                    data?.video_link
                  )}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ) : (
            <div className="h-[500px] p-5 w-3/4 rounded-[20px] relative lg:w-4/5 md:w-[90%] md:h-[450px] sm:w-full">
              <img
                src={data?.image}
                alt={data?.title_uz}
                className="w-full h-full rounded-[20px]"
              />
              <button
                onClick={OpenVideoBtn}
                className="w-16 h-16 rounded-full grid place-items-center bg-[#000000be] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <IoPlay className="text-[32px] text-blue-800" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MuseumsDetails;
