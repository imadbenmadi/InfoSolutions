import React from "react";
import logo from "../assets/Cntic_Logo.png";

export default function Header() {
    return (
        <div className="text-center flex justify-center w-full flex-col md:flex-row md:gap-4  ">
            <span className="  text-Blue text-4xl font-semibold md:order-2 md:mt-2">
                INFO
            </span>
            <span className=" text-4xl text-Black font-semibold md:order-3 md:mt-2">
                Solutions
            </span>

            <img
                src={logo}
                alt="Logo"
                className=" w-[150px] md:order-1 m-auto	md:mr-5"
            />
        </div>
    );
}
