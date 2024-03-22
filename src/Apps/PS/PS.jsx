import React from 'react'
import Page_Title from '../../Components/Page_Title'
import { Link } from 'react-router-dom';
function PS() {
  return (
      <div>
          <Page_Title title="Probability Statistic" />
          <div className=" text-xl md:text-3xl text-center w-full font-bold">
              حلول لقوانين الاحتمالات ذات المتغير المنفصل
          </div>
          <div className=" flex flex-col justify-center items-center gap-8  my-6 ">
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Bernuit"}
              >
                  Loi de Bernuit
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Benomial"}
              >
                  Loi Benomial
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Uniforme"}
              >
                  Loi Uniforme Discret
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Hyper-Geomitrique"}
              >
                  Loi Hyper Geomitrique
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Geomitrique"}
              >
                  Loi Geomitrique
              </Link>
              <Link
                  className=" w-[80%] m-auto bg-gray-200 p-2 md:p-5 text-xl md:text-3xl rounded-lg font-semibold"
                  to={"/PS/Poissont"}
              >
                  Loi de Poissont
              </Link>
          </div>
      </div>
  );
}

export default PS