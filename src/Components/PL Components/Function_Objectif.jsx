import React, { useState, useEffect } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Function_Objectif() {
    const {
        MinMax,
        SetMinMax,
        Desision_var_Nbr,
        SetDesision_var_Nbr,
        variables,
        setVariables,
    } = usePLContext();

    // Initialize variables based on Desision_var_Nbr
    useEffect(() => {
        const newVariables = Array.from(
            { length: Desision_var_Nbr },
            (_, index) => ({
                VariableName: `X${index + 1}`,
                PlusMinus: "+",
                input: 0,
            })
        );
        setVariables(newVariables);
    }, [Desision_var_Nbr]);
    const decreese = () => {
        if (Desision_var_Nbr > 2) SetDesision_var_Nbr(Desision_var_Nbr - 1);
    };
    const increes = () => {
        if (Desision_var_Nbr < 8) {
            SetDesision_var_Nbr(Desision_var_Nbr + 1);
        }
    };

    // Variable Plus/Minus Handling
    const togglePlusMinus = (index) => {
        const updatedVariables = [...variables];
        updatedVariables[index].PlusMinus =
            updatedVariables[index].PlusMinus === "+" ? "-" : "+";
        setVariables(updatedVariables);
    };

    const handleInputChange = (index, value) => {
        const updatedVariables = [...variables];
        updatedVariables[index].input = value;
        setVariables(updatedVariables);
    };

    const Toogle_Min_Max = () => {
        SetMinMax((prev) => (prev === "Min" ? "Max" : "Min"));
    };

    return (
        <>
            {/* Variables Des Décision */}
            <div className="flex flex-wrap items-center justify-start gap-4 mb-4">
                <div className="text-xl font-semibold ">
                    Function Objectif :
                </div>
                <div className="flex flex-wrap items-center justify-center">
                    <div>Variables Des Décision :</div>
                    <div className="flex items-center border w-fit">
                        <button className="bg-gray-300 px-3" onClick={decreese}>
                            -
                        </button>
                        <div className="px-3">{Desision_var_Nbr}</div>
                        <button className="bg-gray-300 px-3" onClick={increes}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            {/* Function Objectif */}
            <div className="md:flex">
                <div className="flex  gap-3 ">
                    {/* Min/Max */}

                    <div className="flex gap-3 ">
                        <div
                            className="cursor-pointer border border-gray-400 w-[50px] h-fit  text-center "
                            onClick={() => Toogle_Min_Max("MinMax")}
                        >
                            {MinMax}
                        </div>
                        <div>Z= </div>
                    </div>

                    <div className="flex  flex-wrap gap-3 ">
                        {/* Variables */}
                        {variables.map((variable, index) => (
                            <div
                                key={index}
                                className="flex items center justify-center w-[120px]  gap-1"
                            >
                                {/* PlusMinus */}
                                {index !== 0 && (
                                    <div
                                        className="cursor-pointer border border-gray-400 w-[30px] text-center"
                                        onClick={() => togglePlusMinus()}
                                    >
                                        {variable.PlusMinus}
                                    </div>
                                )}

                                <input
                                    className="border border-gray-400 w-[50px] text-center"
                                    type="text"
                                    onChange={(e) =>
                                        handleInputChange(index, e.target.value)
                                    }
                                    placeholder="0"
                                />
                                <div>{variable.VariableName}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
