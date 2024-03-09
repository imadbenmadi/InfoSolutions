import React from "react";
import { motion } from "framer-motion";
function CardModel({ color, shortNameModel, modelNama }) {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
      className=" cursor-pointer max-md:my-5 w-[80%] mx-auto h-56 shadow-lg  flex  items-center flex-col rounded-lg bg-slate-100  px-4 py-4 text-2xl "
    >
      <div
        className={`bg-[#3067b1] text-2xl  text-white w-10 flex justify-center items-center  p-8 h-10 rounded-full`}
      >
        {shortNameModel}
      </div>
      <div className="text-2xl text-center mt-10 font-bold"> {modelNama} </div>
    </motion.div>
  );
}

export default CardModel;
