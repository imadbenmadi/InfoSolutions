import React from "react";
import logo from "../assets/Cntic_Logo.png";

export default function Header() {
    return (
        <div className="text-center flex justify-center flex-row w-full mb-[28px]  md:gap-4">
            <img src={logo} alt="Logo" className=" w-[60px] ml-4 	md:md-5 md:m-0 md:w-[130px]" />
            <span className="  text-Blue text-2xl font-semibold md:order-2 md:mt-2 md:text-4xl">
                INFO
            </span>
            <span className=" mr-4 text-2xl text-Black font-semibold md:order-3 md:mt-2 md:text-4xl">
                Solutions
            </span>
        </div>
    );
}
