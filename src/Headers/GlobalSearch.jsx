import { Slide } from "react-awesome-reveal";
import { FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GlobalSearch({ toggleGlobalSearch }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "Yangiliklar", link: "/news" },
    { id: 2, name: "Yodgorliklar", link: "/monuments" },
    { id: 3, name: "Ashyolar", link: "/artifacts" },
    { id: 4, name: "Muzeylar", link: "/museums" },
    { id: 5, name: "Kutubxona", link: "/library" },
    { id: 6, name: "Biz haqimizda", link: "/about" },
  ];

  const SearchEventFunction = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const findText = data?.filter((val) =>
    val?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  const linkBtn = (id) => {
    navigate(id);
    toggleGlobalSearch((p) => !p);
    setSearch("");
  };

  return (
    <div className="h-full relative w-1/3 md:w-full md:mt-4 md:mb-6 md:h-[45px]">
      <input
        onChange={SearchEventFunction}
        className="w-full h-full outline-none text-[18px] text-white px-3 bg-transparent border-solid border-[2px] rounded-[12px]"
        type="text"
        value={search}
        placeholder="Qidiruv ... "
      />
      <button className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
        <FcSearch className="text-white text-[24px]" />
      </button>

      {search?.length > 0 &&
        (findText.length > 0 ? (
          <div className="relative top-3">
            <div className="absolute overflow-hidden w-full bg-[#fff] z-10 p-3 rounded-[20px]">
              <div className="overflow-auto max-h-[250px] flex flex-col gap-2 md:pr-2">
                {findText?.map((value, index) => (
                  <Slide
                    key={index}
                    direction="up"
                    triggerOnce
                    className="w-full px-5 p-2 duration-300 ease-out rounded-[12px] cursor-pointer group hover:bg-gray-700"
                  >
                    <button
                      onClick={() => linkBtn(value?.link)}
                      className="w-full text-[#000] duration-300 ease-out group-hover:text-white text-left"
                    >
                      {value?.name}
                    </button>
                  </Slide>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-yellow-500">Hech narsa topilmadi 😔</p>
        ))}
    </div>
  );
}

export default GlobalSearch;
