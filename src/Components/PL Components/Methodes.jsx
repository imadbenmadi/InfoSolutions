import React from "react";
import { useState } from "react";
import { PLProvider, usePLContext } from "../Apps/PLcontext";
export default function Methodes({ method, setMethod }) {
    const { Desision_var_Nbr } = usePLContext();
    function Toggle_Methode(selectedMethod) {
        if (method !== selectedMethod) {
            setMethod(selectedMethod);
        }
    }
    return (
        <div className=" flex items-center justify-center gap-6 ">
            {Desision_var_Nbr === 2 && (
                <div
                    className={`${
                        method === "Graphique"
                            ? " bg-Blue text-white"
                            : " bg-white text-black"
                    }
                         border-2 p-2 rounded cursor-pointer text-lg font-medium`}
                    onClick={() => Toggle_Methode("Graphique")}
                >
                    Resolution Graphic
                </div>
            )}

            <div
                className={`${
                    method === "Symplexe"
                        ? " bg-Blue text-white"
                        : " bg-white text-black"
                }
                             border-2 p-2 rounded cursor-pointer text-lg font-medium`}
                onClick={() => Toggle_Methode("Symplexe")}
            >
                Methode De Symplexe
            </div>
        </div>
    );
}
