import React from "react";
import "./Font/Font.css";

import MenuBar from "./Components/MenuBar";
import Header from "./Components/Header";
import { Outlet } from "react-router";
export default function App() {
    return (
        <div className="cairo-Font relative   ">
            <div className=" md:flex min-h-full ">
                <div className=" md:flex-[25%] ">
                    <MenuBar />
                </div>

                <div className="md:flex-[75%]  ">
                    <Header />
                    <div className=" w-[90%] m-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
