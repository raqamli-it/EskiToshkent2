import { Fade, Zoom } from "react-awesome-reveal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoPlay } from "react-icons/io5";

function MonumentsDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataId, setDataId] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    const respons = await axios.get(`/archaeologies/${id}/`);
    const responsId = await axios.get(`/archaeologies/${id}/items`);
    setData(respons?.data);
    setDataId(responsId?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const ShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const SelectImg = (id) => {
    setSelectImg(id);
  };

  const navigateAshyolar = (ashyolar) => {
    if (ashyolar.length > 0) {
      navigate(`/monumentsDetail/${id}/items`);
    }
  };

  // console.log(data, "DATA");

  return (
    <div className="w-full py-10 bg-white min-h-[75vh]">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div>
          <h2 className="text-[36px] font-semibold text-[#3f3f3f] md:text-[28px] sm:text-[24px] sm:leading-8">
            {data?.title_uz}
          </h2>

          <div className="w-full h-[3px] bg-[#9f9f9fc8] mt-2 mb-5"></div>
        </div>

        <div className="border-[2px] w-3/5 mx-auto border-solid shadow-[0_0_7px_#b4b4b476] mt-14 mb-5 p-5 xl:w-3/4 lg:w-4/5 lg:mt-8 md:w-[90%] sm:w-[100%] sm:p-3">
          <p
            dangerouslySetInnerHTML={{ __html: data?.context_uz }}
            className="my-5"
          ></p>

          {/* title===qr kod  bo'lgan rasimlar chiqadigan yeri */}
          {data?.archaeologyPicture
            ?.filter((img) => {
              return img.order === 0;
            })
            .map((img, idx) => (
              <div key={idx} className="mb-8">
                <p className="text-[20px] mt-2 font-semibold text-[#020202] sm:text-[18px] sm:leading-[26px]">
                  {/* {img.title}   */}
                  Joylashuv belgisi (QR-kod)
                </p>
                <div className="w-full h-[560px] overflow-hidden md:h-[420px] sm:h-[360px]">
                  <img
                    key={idx}
                    src={img.image}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}

          {/* title===qr kod  bo'lgan rasimlar chiqadigan yeri  */}

          <p className="text-[20px] font-semibold text-[#020202] sm:text-[16px] sm:leading-[26px] mb-3">
            Google Yer (Google earth) dasturidagi ko‘rinishi
          </p>

          <img
            src={data?.image}
            alt={data?.title_uz}
            className="w-full h-[450px] md:h-[360px] sm:h-[320px]"
          />

          <div className="my-10">
            <h2 className="text-[20px] font-semibold text-[#020202] sm:text-[16px] sm:leading-[26px]">
              Belgilangan davrdagi yodgorlik ko'rinishi
            </h2>

            <div className="w-full h-[2px] bg-[#5050bb72] mt-2 mb-5"></div>
          </div>

          {/* Bu kamentga olingan code o'chirilmasin chunki bu yana qaytaringlar desa kamentdan chiqarib qo'yiladi */}
          {/* <div>
            {data?.archaeologyPicture?.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => SelectImg(item)}
                  className="flex items-center gap-5 my-4 sm:my-3"
                >
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-[70px] h-[70px] sm:w-[60px] sm:h-[60px]"
                  />
                  <span className="text-[18px] sm:text-[16px] font-medium">
                    {item?.title}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="relative mt-10">
            <Zoom>
              <img
                src={
                  selectImg == null
                    ? data?.archaeologyPicture?.[0].image
                    : selectImg.image
                }
                alt={
                  selectImg == null
                    ? data?.archaeologyPicture?.[0].title
                    : selectImg.title
                }
                className="w-full h-[550px] filter brightness-[30%] opacity-80 object-cover md:h-[460px] sm:h-[360px]"
              />
            </Zoom>

            <img
              src={
                selectImg == null
                  ? data?.archaeologyPicture?.[0].image
                  : selectImg.image
              }
              alt={
                selectImg == null
                  ? data?.archaeologyPicture?.[0].title
                  : selectImg.title
              }
              className="w-3/5 h-[420px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-4/5 md:h-[360px] sm:h-[260px]"
            />
          </div> */}

          <div>
            {data?.archaeologyPicture
              ?.filter((value) => value?.order !== 0)
              .sort((a, b) => b.order - a.order)
              .map((item, idx) => (
                <div key={idx} className="mb-8">
                  <p className="text-[20px] mt-2 font-semibold text-[#020202] sm:text-[16px] sm:leading-[26px] mb-3">
                    {item?.title}
                  </p>
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-[450px]  md:h-[360px] sm:h-[320px] object-cover"
                  />
                </div>
              ))}
          </div>

          <div className="flex justify-center flex-col items-center gap-5 my-6">
            <button
              onClick={() => navigateAshyolar(dataId)}
              className={`bg-blue-800 border-none w-full px-5 py-2 text-white text-[18px] rounded-[16px] sm:text-[16px] ${
                !dataId.length > 0 && "cursor-not-allowed"
              }`}
            >
              Ashyolar
            </button>

            <button className="bg-blue-800 border-none w-full px-5 py-2 text-white text-[18px] rounded-[16px] sm:text-[16px]">
              <a href={data?.pasport} target="_blanck">
                Pasport
              </a>
            </button>
          </div>

          <div>
            {showVideo && data?.video_link ? (
              <iframe
                className="w-full h-[400px] sm:h-[340px]"
                src={`${data?.video_link}?autoplay=1&mute=1`}
                allow="autoplay"
                title="YouTube video player"
                loading="lazy"
                decoding="async"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={data?.image}
                alt={data?.title_uz}
                className="w-full h-[400px] sm:h-[340px]"
              />
            )}

            <button
              onClick={ShowVideo}
              className="w-[42px] h-[42px] sm:w-[36px] sm:h-[36px] grid place-items-center mt-5 rounded-full border-solid border-[2px] shadow-[0_0_10px_#000]"
            >
              <IoPlay
                className={`text-[24px] sm:text-[16px] ${
                  showVideo && data?.video_link ? "text-blue-700" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonumentsDetails;
