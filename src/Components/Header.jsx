import React from "react";
import logo from "../assets/Cntic_Logo.png";

export default function Header() {
    return (
        <div className="text-center ">
            <div>
                <span className="  text-Blue text-4xl font-semibold ">
                    INFO
                </span>
                <br />
                <span className=" text-3xl text-Black font-semibold ">Solutions</span>
            </div>
            <img src={logo} alt="Logo" className=" w-[150px]" />
        </div>
    );
}
