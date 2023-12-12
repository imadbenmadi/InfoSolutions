import React from "react";
import { useState } from "react";
export default function MenuBar() {
    const [MobileMenuVisible, setMobileMenuVisibility] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!MobileMenuVisible);
    };
    return (
        <>
            {/* Mobile menu bar */}
            <div
                className="md:hidden bg-Blue w-[100px] h-[100px] rounded-br-[80px] absolute top-[-25px] left-[-35px] z-10"
                onClick={toggleMobileMenu}
            ></div>
            <div className="md:hidden flex w-full">
                <div
                    className={`${
                        MobileMenuVisible
                            ? "block w-[65%] translate-x-0"
                            : "hidden w-0 translate-x-full"
                    } md:hidden bg-blue-500 h-[100vh] z-50 relative transition-all duration-300 ease-in-out`}
                >
                    <div
                        className="w-5 h-5 bg-white text-Blue font-bold rounded flex justify-center items-center absolute right-2 top-2"
                        onClick={toggleMobileMenu}
                    >
                        X
                    </div>
                    <div className="flex flex-col items-center justify-center h-[100%]">
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                    </div>
                </div>

                <div
                    className={`${
                        MobileMenuVisible
                            ? "bg-gray-400 transition-all duration-100 ease-in-out"
                            : "bg-transparent"
                    } w-[35%] h-[100vh]`}
                    onClick={toggleMobileMenu}
                ></div>
            </div>

            {/* Laptop Menu Bar */}

            <div className=" hidden md:block    h-[100vh] bg-Blue w-[255px]"></div>
        </>
    );
}
