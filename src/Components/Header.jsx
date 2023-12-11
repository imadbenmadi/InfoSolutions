import React from "react";
import logo from "../assets/Cntic_Logo.png";

export default function Header() {
    return (
        <div>
            <div>
                <span className=" text-red-400">Info</span>
                <br />
                <span>Solutions</span>
            </div>
            <img src={logo} alt="Logo" className=" w-[150px]" />
        </div>
    );
}
