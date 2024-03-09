import React from "react";
import { motion } from "framer-motion";
import facbook from "../../assets/facebook.jpg";
import instagram from "../../assets/indtagram.png";
import github from "../../assets/github.png";
function CardOfMember({ image, fullName, skilles, dec }) {
  return (
    <motion.div
      className=" cursor-pointer
      mx-auto h-[30rem] flex flex-col rounded-lg justify-center pb-4 bg-white border border-gray-200 border-solid max-w-[300px] max-md:maw-w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full  overflow-hidden rounded-lg mx-auto my-auto  ">
        <img
          loading="lazy"
          src={image}
          className=" w-[90%] h-[90%] mx-auto mt-3 rounded-lg overflow-hidden cover"
        />
      </div>
      <div className="flex flex-col justify-center px-4 mt-4 w-full">
        <div className="text-lg font-semibold leading-8 whitespace-nowrap text-zinc-800">
          {fullName}
        </div>
        <div className="mt-1 text-sm leading-5 text-gray-700 whitespace-nowrap">
          {skilles}
        </div>
        <div className="mt-2 text-sm leading-6 text-gray-500">{dec}</div>
        <div className="flex gap-4 pr-20 mt-6">
          <motion.img
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.55 }}
            loading="lazy"
            src={facbook}
            className="shrink-0 w-6 aspect-square"
          />
          <motion.img
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.55 }}
            loading="lazy"
            src={github}
            className="shrink-0 w-[20px]  aspect-square"
          />
          <motion.img
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.5 }}
            loading="lazy"
            src={instagram}
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default CardOfMember;
