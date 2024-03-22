import React from 'react'
import Page_Title from '../../Components/Page_Title'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

function PS() {
  return (
      <div>
          <Page_Title title="Probability Statistic" />
          <div className=" text-xl md:text-3xl text-center w-full font-bold">
              حلول لقوانين الاحتمالات ذات المتغير المنفصل
          </div>
          <div className=" flex flex-col justify-center items-center gap-8  my-6 ">
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800"
                  to={"/PS/Bernuit"}
              >
                  <span className=" ml-4 md:ml-12">Loi de Bernuit</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800 "
                  to={"/PS/Benomial"}
              >
                  <span className=" ml-4 md:ml-12">Loi Benomial</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800"
                  to={"/PS/Uniforme"}
              >
                  <span className=" ml-4 md:ml-12">Loi Uniforme Discret</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800"
                  to={"/PS/Hyper-Geomitrique"}
              >
                  <span className=" ml-4 md:ml-12">Loi Hyper Geomitrique</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800"
                  to={"/PS/Geomitrique"}
              >
                  <span className=" ml-4 md:ml-12">Loi Geomitrique</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold flex justify-between items-center text-gray-800"
                  to={"/PS/Poissont"}
              >
                  <span className=" ml-4 md:ml-12"> Loi de Poissont</span>
                  <FaChevronRight className=" ml-4 md:mr-12" />
              </Link>
          </div>
      </div>
  );
}

export default PS