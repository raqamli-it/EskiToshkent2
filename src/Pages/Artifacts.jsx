import axios from "axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Artifacts() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const getData = async (Page = 1) => {
    const respons = await axios.get(`items/?page=${Page}`);

    setPageCount(Math.ceil(respons?.data?.pagination?.total / 12));
    setData(respons?.data);
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage }); // URL ga saqlash
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <div className="py-10 w-full bg-[#f1ebeb13]">
      <div className="max-w-[1400px] mx-auto xl:px-5">
        <div className="">
          <h2 className="text-[36px] font-semibold text-[#9f9f9fc8] xl:text-[36px] md:text-[32px] sm:text-[26px]">
            Ashyolar
          </h2>

          <div className="w-full h-[3px] bg-[#9f9f9fc8] my-[20px] xl:my-[10px]"></div>
        </div>

        <div className="grid grid-cols-4 gap-5 my-10 xl:grid-cols-3 lg:grid-cols-2 md:gap-3 sm:grid-cols-1 sm:gap-5">
          {data?.results?.map((value, index) => (
            <div
              key={index}
              className="h-[400px] rounded-[20px] overflow-hidden relative group md:h-[350px] sm:h-[300px]"
            >
              <img
                src={value?.image}
                alt={value?.title_uz}
                className="h-full w-full transition duration-500 ease-in-out object-cover group-hover:scale-110"
              />
              <Link
                to={`/artifactsDetail/${value?.id}`}
                className="bg-[#0000009f] duration-300 group-hover:duration-300 group-hover:bg-[#ffffffcc] group-hover:text-black w-full h-[55px] absolute bottom-0 justify-center flex items-center text-white text-[20px] line-clamp-1 md:text-[18px] md:text-center md:leading-[22px]"
              >
                {value?.title_uz}
              </Link>
            </div>
          ))}
        </div>

        <ReactPaginate
          previousLabel={<FaArrowLeft />}
          nextLabel={<FaArrowRight />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
}

export default Artifacts;
