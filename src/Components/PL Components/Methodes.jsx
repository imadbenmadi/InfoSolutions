import React from "react";
import { useState } from "react";
export default function Methodes({ method, setMethod}) {
    function Toggle_Methode(selectedMethod) {
        if (method !== selectedMethod) {
            setMethod(selectedMethod);
        }
    }
    return (
        <div className=" flex items-center justify-center gap-6 ">
            <div
                className={`${
                    method === "Graphique"
                        ? " bg-Blue text-white"
                        : " bg-white text-black"
                }
                        border p-2 rounded cursor-pointer text-lg font-medium`}
                onClick={() => Toggle_Methode("Graphique")}
            >
                Resolution Graphic
            </div>
            <div
                className={`${
                    method === "Symplexe"
                        ? " bg-Blue text-white"
                        : " bg-white text-black"
                }
                             border p-2 rounded cursor-pointer text-lg font-medium`}
                onClick={() => Toggle_Methode("Symplexe")}
            >
                Methode De Symplexe
            </div>
        </div>
    );
}
