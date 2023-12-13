import React from "react";
import logo from "../assets/Cntic_Logo.png";

export default function Header() {
    return (
        <div className="text-center flex justify-end flex-row w-full   md:gap-4 sm:justify-center md:justify-center ">
            <img src={logo} alt="Logo" className=" w-[100px] 	md:mr-5 md:m-0" />
            <span className="  text-Blue text-2xl font-semibold md:order-2 md:mt-2 md:text-4xl">
                INFO
            </span>
            <span className=" text-2xl text-Black font-semibold md:order-3 md:mt-2 md:text-4xl">
                Solutions
            </span>
        </div>
    );
}
