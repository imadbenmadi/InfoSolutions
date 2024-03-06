import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function MenuBar() {
    const [MobileMenuVisible, setMobileMenuVisibility] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!MobileMenuVisible);
    };
    return (
        <>
            {/* Mobile menu bar */}

            <div className="md:hidden   ">
                <div
                    className={`${
                        MobileMenuVisible
                            ? "translate-y-[-100%] "
                            : " translate-y-[0%] delay-200 "
                    }transition-translate duration-300 ease-in-out bg-Blue w-[100px] h-[100px] rounded-br-[80px] flex  flex-col gap-1 justify-center items-end  fixed top-[-25px] left-[-45px]  z-10`}
                    onClick={toggleMobileMenu}
                >
                    <div className=" w-5 h-1 mr-6 bg-white rounded"></div>
                    <div className=" w-5 h-1 mr-6 bg-white rounded"></div>
                    <div className=" w-5 h-1 mr-6 bg-white rounded"></div>
                </div>

                <div
                    className={`${
                        MobileMenuVisible
                            ? " h-full delay-200"
                            : " h-0 delay-200"
                    } flex w-full fixed transition-all z-[999] `}
                >
                    <div
                        className={`${
                            MobileMenuVisible
                                ? " translate-x-[0%] delay-200"
                                : " translate-x-[-100%]"
                        } 
                            ${
                                MobileMenuVisible
                                    ? " block delay-200"
                                    : " hiddden delay-200"
                            }
                         bg-Blue w-[65%] h-[100vh] relative transition-all duration-300  ease-in-out`}
                    >
                        <div
                            className="w-[40px] h-[40px] text-xl bg-white text-Blue font-bold rounded-bl-xl  rounded-tr-xl rounded-tl-sm  rounded-br-sm flex justify-center items-center absolute right-2 top-2"
                            onClick={toggleMobileMenu}
                        >
                            X
                        </div>
                        <div className="flex flex-col items-start justify-center gap-7 h-[100%] text-white font-semibold ">
                            <Link
                                className="ml-3"
                                to={"/"}
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                            <div className=" w-full h-1 bg-white"></div>
                            <Link
                                className=" ml-3"
                                to={"/PL"}
                                onClick={toggleMobileMenu}
                            >
                                Programation Linéer
                            </Link>
                            <Link
                                className="ml-3"
                                to={"/PS"}
                                onClick={toggleMobileMenu}
                            >
                                Propabilité Statistique
                            </Link>
                            <Link
                                className="ml-3"
                                to={"/SE"}
                                onClick={toggleMobileMenu}
                            >
                                Systéme D'exploitation
                            </Link>
                            <div className=" w-full h-1 bg-white"></div>
                            <Link
                                className="ml-3"
                                to={"/PTGL"}
                                onClick={toggleMobileMenu}
                            >
                                Théory Des Graphs
                            </Link>
                            <Link
                                className="ml-3"
                                to={"/TL"}
                                onClick={toggleMobileMenu}
                            >
                                Théory des Langage
                            </Link>
                            <Link
                                className="ml-3"
                                to={"/MN"}
                                onClick={toggleMobileMenu}
                            >
                                Méthodes Numérique
                            </Link>
                            <div className=" w-full h-1 bg-white"></div>
                            <Link
                                className="ml-3"
                                to={"/SM"}
                                onClick={toggleMobileMenu}
                            >
                                Systéme Machine
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`${
                            MobileMenuVisible
                                ? " translate-x-0 bg-gray-400 transition-colors delay-300 duration-300 ease-in-out"
                                : " translate-x-full bg-transparent"
                        } w-[35%] h-[100vh] opacity-[0.3] `}
                        onClick={toggleMobileMenu}
                    ></div>
                </div>
            </div>

            {/* Laptop Menu Bar */}
            <div className="hidden md:block w-[25%] h-screen bg-Blue fixed top-0">
                <div className="pt-8 flex flex-col justify-start gap-6 h-full text-white font-semibold">
                    <Link
                        className="ml-3 block"
                        to={"/"}
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </Link>
                    <div className="w-full h-1 bg-white my-2"></div>
                    <Link
                        className="ml-3 block"
                        to={"/PL"}
                        onClick={toggleMobileMenu}
                    >
                        Programation Linéer
                    </Link>
                    <Link
                        className="ml-3 block"
                        to={"/PS"}
                        onClick={toggleMobileMenu}
                    >
                        Propabilité Statistique
                    </Link>
                    <Link
                        className="ml-3 block"
                        to={"/SE"}
                        onClick={toggleMobileMenu}
                    >
                        Systéme D'exploitation
                    </Link>
                    <div className="w-full h-1 bg-white my-2"></div>
                    <Link
                        className="ml-3 block"
                        to={"/PTGL"}
                        onClick={toggleMobileMenu}
                    >
                        Théory Des Graphs
                    </Link>
                    <Link
                        className="ml-3 block"
                        to={"/TL"}
                        onClick={toggleMobileMenu}
                    >
                        Théory des Langage
                    </Link>
                    <Link
                        className="ml-3 block"
                        to={"/MN"}
                        onClick={toggleMobileMenu}
                    >
                        Méthodes Numérique
                    </Link>
                    <div className="w-full h-1 bg-white my-2"></div>
                    <Link
                        className="ml-3 block"
                        to={"/SM"}
                        onClick={toggleMobileMenu}
                    >
                        Systéme Machine
                    </Link>
                </div>
            </div>
        </>
    );
}
