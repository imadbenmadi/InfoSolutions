import React from "react";
import { useState } from "react";
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
                  className=" bg-Blue w-[100px] h-[100px] rounded-br-[80px] absolute top-[-25px] left-[-35px]  z-10"
                  onClick={toggleMobileMenu}
              ></div>

              {/* {MobileMenuVisible && ( */}
              <div className=" flex w-full absolute ">
                  <div
                      className={`${
                          MobileMenuVisible
                              ? " translate-x-[0%]"
                              : " translate-x-[-100%]"
                      }  bg-Blue w-[65%] h-[100vh] z-20 relative transition-all duration-300 ease-in-out`}
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
                              ? " translate-x-0 bg-gray-400 transition-colors delay-300 duration-200 ease-in-out"
                              : " translate-x-full bg-transparent"
                      } w-[35%] h-[100vh] opacity-[0.3] `}
                      onClick={toggleMobileMenu}
                  ></div>
              </div>
              {/* )} */}

              {/* Laptop Menu Bar */}
          </div>
          <div className=" hidden md:block absolute  h-[100vh] bg-Blue w-[255px]"></div>
      </>
  );
}
