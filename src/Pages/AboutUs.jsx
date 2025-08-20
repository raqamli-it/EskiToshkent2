import axios from "axios";
import { useEffect, useState } from "react";
import about_logo from "../assets/images/about_logo.webp";

function AboutUs() {
  const [data, setData] = useState([]);
  const [about, setAbout] = useState([]);

  const getData = async () => {
    const respons = await axios.get(`olimlar/`);
    const respons2 = await axios.get(`about/`);

    setAbout(respons2?.data);

    setData(respons?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-20 w-full">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="bg-[#E5E5E5] rounded-[12px] p-[35px] md:p-[25px] sm:p-5">
          <p className="text-[22px] indent-10 text-justify sm:indent-5 md:text-[18px] sm:text-[16px]">
            {about.map((v) => v.description_uz).join(" ")}
          </p>
        </div>

        <h2 className="text-[42px] font-semibold text-[#000000da] xl:text-[36px] md:text-[32px] sm:text-[26px]">
          Loyiha qatnashchilari
        </h2>

        <div className="grid grid-cols-4 gap-5 my-10 xl:grid-cols-3 lg:grid-cols-2 md:gap-3 sm:grid-cols-1 sm:gap-5 overflow-hidden">
          {data?.results?.map((value, index) => (
            <div
              key={value?.id}
              className="h-[400px] rounded-[20px] relative group bg-[#E5E5E5] overflow-hidden cursor-pointer"
            >
              <div className="w-full h-[295px] overflow-hidden">
                <img
                  // decoding="async"
                  loading="lazy"
                  src={value?.image}
                  alt={value?.title_uz}
                  className="w-full h-full transition object-cover duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="leading-[28px] h-[105px] duration-300 group-hover:duration-300 bg-[#E5E5E5] group-hover:text-black w-full justify-center flex items-center flex-col text-[18px] px-2 py-[5px] line-clamp-1">
                <h2
                  to="/"
                  className="font-semibold line-clamp-1 mt-1 w-full text-center h-[35px]"
                >
                  {value?.fullname_uz}
                </h2>

                <h4 className="text-[17px] font-semibold leading-6 h-[35px] px-3 w-full text-center line-clamp-2">
                  {value?.pasition_uz}
                </h4>

                <h4 className="text-[17px] font-semibold leading-6 px-3 w-full h-[35px] text-center line-clamp-2">
                  {value?.degree_uz}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-8 items-stretch my-10 lg:gap-4 md:flex-col">
          <div className="w-1/2 bg-[#00000091] rounded-[20px] p-8 lg:p-5 md:w-full">
            <img
              src={about_logo}
              loading="lazy"
              alt="about_logo"
              className="h-[100px] lg:h-[80px]"
            />
            <h3 className="text-white text-[28px] leading-[36px] border-b-[3px] py-[10px] my-5 lg:pb-1 lg:text-[24px] lg:leading-[30px]">
              O'zbekiston Fanlar akademiyasi Tarix instituti
            </h3>

            <h4 className="text-white text-[18px] leading-[36px] my-[10px] md:leading-6">
              100060, Toshkent shahar Mirobod tumani Shahrisabz tor ko‘chasi,
              5-uy
            </h4>

            <h4 className="text-white text-[18px] leading-[36px] my-[10px] md:leading-6">
              Telefon: (+998 71) 233-54-70
            </h4>

            <h4 className="text-white text-[18px] leading-[36px] my-[10px] md:leading-6">
              Gmail: info@fati.uz
            </h4>

            <div className="flex items-center gap-3 text-white text-[18px] leading-[36px] my-[10px]">
              <h4>Rasmiy sayt: </h4>
              <a href="#" className="text-blue-800">
                fati.uz
              </a>
            </div>
          </div>

          <div className="w-1/2 md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.176463519816!2d69.27856649678955!3d41.30502459999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcb0309aec1%3A0x3b72bce1a456e606!2zVGFyaXggaW5zdGl0dXRpIHwg0JjQvdGB0YLQuNGC0YPRgiDQuNGB0YLQvtGA0LjQuA!5e0!3m2!1sen!2s!4v1749666087231!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-[20px] md:h-[400px] sm:h-[340px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
