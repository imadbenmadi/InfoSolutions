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
          <div className="md:hidden  ">
              {/* Mobile menu bar */}
              <div
                  className={`${
                      MobileMenuVisible ? "hidden " : " block"
                  } bg-Blue w-[100px] h-[100px] rounded-br-[80px] absolute top-[-25px] left-[-35px]  z-10`}
                  onClick={toggleMobileMenu}
              ></div>

              <div className=" flex w-full fixed ">
                  <div
                      className={`${
                          MobileMenuVisible
                              ? " translate-x-[0%]"
                              : " translate-x-[-100%]"
                      }  bg-Blue w-[65%] h-[100vh] z-30 relative transition-all duration-300 ease-in-out`}
                  >
                      <div
                          className="w-[40px] h-[40px] text-xl bg-white text-Blue font-bold rounded-bl-xl  rounded-tr-xl rounded-tl-sm  rounded-br-sm flex justify-center items-center absolute right-2 top-2"
                          onClick={toggleMobileMenu}
                      >
                          X
                      </div>
                      <div className="flex flex-col items-start justify-center gap-7 h-[100%] text-white font-semibold ">
                          <div className=" ml-3 border-b-2"><Link to={"/"}> Home</Link></div>
                          <div className=" w-full h-1 bg-white"></div>
                          <div className=" ml-3">Programation Linéer</div>
                          <div className=" ml-3">Propabilité Statistique</div>
                          <div className=" ml-3">Systéme D'exploitation</div>
                          <div className=" w-full h-1 bg-white"></div>
                          <div className=" ml-3">Théory Des Graphs</div>
                          <div className=" ml-3">Théory des Langage</div>
                          <div className=" ml-3">Méthodes Numérique</div>
                          <div className=" w-full h-1 bg-white"></div>
                          <div className=" ml-3">Systéme Machine</div>
                      </div>
                  </div>

                  <div
                      className={`${
                          MobileMenuVisible
                              ? " translate-x-0 bg-gray-400 transition-colors delay-150 duration-300 ease-in-out"
                              : " translate-x-full bg-transparent"
                      } w-[35%] h-[100vh] opacity-[0.3] `}
                      onClick={toggleMobileMenu}
                  ></div>
              </div>

              {/* Laptop Menu Bar */}
          </div>
          <div className=" hidden md:block absolute  h-[100vh] bg-Blue w-[255px]"></div>
      </>
  );
}
