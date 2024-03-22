import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Loi_Header({ Name }) {
    return (
        <div>
            <Link 
                to={"/PS"}
                className=" text-white bg-green-700 flex justify-around items-center
             w-[150px] m-auto p-2 rounded-lg"
            >
                <FaArrowLeft />
                <span className=" font-bold md:text-xl">ارجع الى الخلف</span>
            </Link>

            <div>{Name}</div>
        </div>
    );
}

export default Loi_Header;
