import React, { useState, useEffect } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Function_Objectif() {
    const {
        MinMax,
        SetMinMax,
        PlusMinus,
        SetPlusMinus,
        Desision_var_Nbr,
        SetDesision_var_Nbr,
    } = usePLContext();

    const [variables, setVariables] = useState([]);

    // Initialize variables based on Desision_var_Nbr
    useEffect(() => {
        const newVariables = Array.from(
            { length: Desision_var_Nbr },
            (_, index) => ({
                VariableName: `X${index + 1}`,
                SetValueFunction: `SetX${index + 1}`,
            })
        );
        setVariables(newVariables);
    }, [Desision_var_Nbr]);

    const decreese = () => {
        if (Desision_var_Nbr > 2) SetDesision_var_Nbr(Desision_var_Nbr - 1);
    };

    const increes = () => {
        SetDesision_var_Nbr(Desision_var_Nbr + 1);
    };

    const handleToggle = (field) => {
        switch (field) {
            case "MinMax":
                SetMinMax((prev) => (prev === "min" ? "max" : "min"));
                break;
            case "PlusMinus":
                SetPlusMinus((prev) => (prev === "+" ? "-" : "+"));
                break;
            default:
                break;
        }
    };

    const handleVariableChange = (index, value) => {
        const updatedVariables = [...variables];
        updatedVariables[index].VariableName = value;
        setVariables(updatedVariables);
    };

    const handleAddVariable = () => {
        // Logic to add a new variable
        console.log("Add a new variable");
    };

    return (
        <>
            {/* Variables Des Décision */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="text-xl font-semibold ">
                    Function Objectif :
                </div>
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
            {/* Function Objectif */}
            <div className="md:flex">
                <div className="flex items-center flex-wrap gap-3 text">
                    {/* Min/Max */}
                    <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => handleToggle("MinMax")}
                    >
                        {MinMax}
                        <div>Z= </div>
                    </div>
                    {/* Variables */}
                    {variables.map((variable, index) => (
                        <div key={index} className="flex gap-1">
                            <input
                                className="border border-gray-400 w-[50px] text-center"
                                type="text"
                                value={variables[index].VariableName}
                                onChange={(e) =>
                                    handleVariableChange(index, e.target.value)
                                }
                                placeholder={`Variable ${index + 1}`}
                            />
                            <div>{variable.VariableName}</div>
                        </div>
                    ))}
                    {/* Plus/Minus */}
                    <div
                        className="flex gap-1 cursor-pointer"
                        onClick={() => handleToggle("PlusMinus")}
                    >
                        {PlusMinus}
                    </div>
                </div>
            </div>
        </>
    );
}
