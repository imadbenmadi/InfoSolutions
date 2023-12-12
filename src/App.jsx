import React from "react";
import MenuBar from "./Components/MenuBar";
import Header from "./Components/Header";
import { Outlet } from "react-router";
export default function App() {
    return (
        <div className="relative h-[100vh] max-h-[100vh] w-[100vw] overflow-hidden  ">
            <div className=" md:flex">
                <div className=" md:flex-[20%]">
                    <MenuBar />
                </div>
                <div className="md:flex-[80%] ">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
