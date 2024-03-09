import React from "react";

function CardModel({ color, shortNameModel, modelNama }) {
  return (
    <div className=" w-[100%] h-56 shadow-lg  flex  items-center flex-col rounded-lg bg-slate-100 my-auto px-4 py-4 text-2xl ">
      <div
        className={`bg-[#3067b1] text-2xl  text-white w-10 flex justify-center items-center  p-8 h-10 rounded-full`}
      >
        {shortNameModel}
      </div>
      <div className="text-2xl text-center mt-10 font-bold"> {modelNama} </div>
    </div>
  );
}

export default CardModel;
