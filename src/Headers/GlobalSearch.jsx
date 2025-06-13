import { FaSearch } from "react-icons/fa";

function GlobalSearch() {
  return (
    <form className="h-full relative text-white text-[20px] xl:text-[18px] lg:text-[16px]">
      <input
        className="h-full w-full outline-none px-3 bg-transparent border-solid border-[2px] rounded-[6px]"
        type="text"
        placeholder="Search ... "
      />
      <button className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
        <FaSearch />
      </button>
    </form>
  );
}

export default GlobalSearch;
