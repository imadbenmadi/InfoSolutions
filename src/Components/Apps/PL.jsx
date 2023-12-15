import React, { useState } from "react";
import Function_Objectif from "../PL Components/Function_Objectif";
import { PLProvider } from "./PLcontext";
const PL = () => {
    

    return (
        <PLProvider>
            <div className=" text-Black">
                <div className="text-Blue font-bold text-2xl underline mb-4">
                    Programation Lineer
                </div>

                <Function_Objectif />
            </div>
        </PLProvider>
    );
};

export default PL;
