import React, { useState } from "react";
import Function_Objectif from "../PL Components/Function_Objectif";
import Contraints from "../PL Components/Containts";
import { PLProvider } from "./PLcontext";
import Solution from "../PL Components/Solution";
const PL = () => {
    

    return (
        <div className=" text-Black">
            <div className="text-Blue  font-bold text-2xl underline mb-4">
                Programation Lineer
            </div>
            <PLProvider>
                <Function_Objectif />
                <div className="w-full h-[1px] my-4 bg-gray-300"></div>
                <Contraints />
                <Solution />
            </PLProvider>
        </div>
    );
};

export default PL;
