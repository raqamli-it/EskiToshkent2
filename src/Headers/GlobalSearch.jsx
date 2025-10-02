import { Slide } from "react-awesome-reveal";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function GlobalSearch() {
  const [search, setSearch] = useState(null);
  const [searchText, setSearchText] = useState();

  const data = [
    { id: 1, name: "Yangiliklar", link: "/news" },
    { id: 2, name: "Yodgorliklar", link: "/monuments" },
    { id: 3, name: "Ashyolar", link: "/artifacts" },
    { id: 4, name: "Muzeylar", link: "/museums" },
    { id: 5, name: "Kutubxona", link: "/library" },
    { id: 6, name: "Biz haqimizda", link: "/about" },
  ];

  const SearchEventFunction = (e) => {
    setSearch(e.target.value);
  };

  const findText = data?.filter((val) =>
    val?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  return (
    <form className="h-full relative text-white text-[20px] xl:text-[18px] lg:text-[16px]">
      <input
        onChange={SearchEventFunction}
        className="h-full w-full outline-none px-3 bg-transparent border-solid border-[2px] rounded-[6px]"
        type="text"
        placeholder="Qidiruv ... "
      />
      <button className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
        <FaSearch />
      </button>

      {search?.length > 0 &&
        (findText.length > 0 ? (
          <div className="relative top-4">
            <div className="absolute overflow-hidden w-full bg-[#fff] z-10 p-3 rounded-[15px]">
              <div className="overflow-auto max-h-[250px] flex flex-col gap-3">
                {findText?.map((value, index) => (
                  <Slide
                    key={index}
                    direction="up"
                    triggerOnce
                    className="w-full px-5 p-2 duration-300 ease-out rounded-[12px] cursor-pointer group hover:bg-gray-700"
                  >
                    <Link
                      to={value.link}
                      className="w-full text-[#000] duration-300 ease-out group-hover:text-white"
                    >
                      {value?.name}
                    </Link>
                  </Slide>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white mt-2">Hech narsa topilmadi</p>
        ))}
    </form>
  );
}

export default GlobalSearch;
