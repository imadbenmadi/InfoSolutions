import React, { useState, useEffect } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Constraints() {
    const { SetConstraints, Desision_var_Nbr } = usePLContext();
    const [constraints, setConstraints] = useState([]);

    useEffect(() => {
        const newConstraints = Array.from(
            { length: constraints.length },
            (_, index) => {
                const existingConstraint = constraints[index] || {};
                const newConstraint = {
                    Operatore: existingConstraint.Operatore || ">=",
                    Value: existingConstraint.Value || "",
                };

                for (let i = 1; i <= Desision_var_Nbr; i++) {
                    newConstraint[`X${i}`] = existingConstraint[`X${i}`] || "";
                    newConstraint[`PlusMinus${i}`] =
                        existingConstraint[`PlusMinus${i}`] || "+";
                }

                return newConstraint;
            }
        );

        setConstraints(newConstraints);
        SetConstraints(newConstraints);
    }, [Desision_var_Nbr, constraints.length, SetConstraints]);

    const handleAddConstraint = () => {
        if (constraints.length < 3) {
            const newConstraint = {
                Operatore: ">=",
                Value: "",
            };

            for (let i = 1; i <= Desision_var_Nbr; i++) {
                newConstraint[`X${i}`] = "";
                newConstraint[`PlusMinus${i}`] = "+";
            }

            setConstraints((prevConstraints) => [
                ...prevConstraints,
                newConstraint,
            ]);
            SetConstraints((prevConstraints) => [
                ...prevConstraints,
                newConstraint,
            ]);
        }
    };

    const handleRemoveConstraint = (index) => {
        setConstraints((prevConstraints) => [
            ...prevConstraints.slice(0, index),
            ...prevConstraints.slice(index + 1),
        ]);
        SetConstraints((prevConstraints) => [
            ...prevConstraints.slice(0, index),
            ...prevConstraints.slice(index + 1),
        ]);
    };

    const toggleSelect = (field, index) => {
        const updatedConstraints = [...constraints];

        if (field.startsWith("PlusMinus")) {
            updatedConstraints[index][field] =
                updatedConstraints[index][field] === "+" ? "-" : "+";
        } else if (field === "Operatore") {
            updatedConstraints[index][field] =
                updatedConstraints[index][field] === ">=" ? "<=" : ">=";
        }

        setConstraints(updatedConstraints);
        SetConstraints(updatedConstraints);
    };

    const handleInputChange = (index, field, value) => {
        if (/^-?\d*\.?\d*$/.test(value) || value === "") {
            const updatedConstraints = [...constraints];
            updatedConstraints[index] = {
                ...updatedConstraints[index],
                [field]: value,
            };
            setConstraints(updatedConstraints);
            SetConstraints(updatedConstraints);
        }
    };

    return (
        <>
            <div className=" flex items-start justify-start gap-10">
                <div className="text-xl font-semibold mb-3">Constraints :</div>
                {/* Add Constraint btn */}
                <div className=" w-fit">
                    <button
                        className="bg-green-500 p-2 rounded-3xl mb-5"
                        onClick={handleAddConstraint}
                    >
                        Add Constraint
                    </button>
                </div>
            </div>

            {/* Contraints */}
            <div className="flex flex-col justify-center">
                {constraints.map((constraint, index) => (
                    <React.Fragment key={index}>
                        <div className=" flex">
                            <div className="flex-[95%] flex items-center flex-wrap gap-2  m-auto">
                                {Array.from(
                                    { length: Desision_var_Nbr },
                                    (_, i) => (
                                        <React.Fragment key={i}>
                                            {/* PlusMinus */}
                                            {i !== 0 && (
                                                <div className="flex gap-1 cursor-pointer border border-gray-400 w-[20px] text-center">
                                                    <div
                                                        onClick={() =>
                                                            toggleSelect(
                                                                `PlusMinus${
                                                                    i + 1
                                                                }`,
                                                                index
                                                            )
                                                        }
                                                        className="border border-gray-400 text-center w-[20px] cursor-pointer relative"
                                                    >
                                                        {
                                                            constraint[
                                                                `PlusMinus${
                                                                    i + 1
                                                                }`
                                                            ]
                                                        }
                                                    </div>
                                                </div>
                                            )}

                                            {/* X */}
                                            <div className="flex gap-1">
                                                <input
                                                    className="border border-gray-400 w-[40px] text-center"
                                                    type="text"
                                                    id={`X${i + 1}-${index}`}
                                                    name={`X${i + 1}-${index}`}
                                                    value={
                                                        constraint[`X${i + 1}`]
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            `X${i + 1}`,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="0"
                                                />
                                                <div>{`X${i + 1}`}</div>
                                            </div>
                                        </React.Fragment>
                                    )
                                )}
                                {/* Operator */}
                                <div className="flex gap-1">
                                    <div
                                        onClick={() =>
                                            toggleSelect("Operatore", index)
                                        }
                                        className="border border-gray-400 px-1 cursor-pointer relative"
                                    >
                                        {constraint.Operatore}
                                    </div>
                                </div>
                                {/* Value */}
                                <div>
                                    <input
                                        className="border border-gray-400 w-[50px] text-center"
                                        type="text"
                                        id={`Value-${index}`}
                                        name={`Value-${index}`}
                                        value={constraint.Value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "Value",
                                                e.target.value
                                            )
                                        }
                                        placeholder="3"
                                    />
                                </div>
                            </div>
                            {/* Remove Constraint */}
                            <button
                                className="flex-[5%] w-[20px] h-[20px] bg-red-500 flex justify-center
                                    items-center text-white font-bold rounded-full"
                                onClick={() => handleRemoveConstraint(index)}
                            >
                                x
                            </button>
                        </div>

                        <div className="w-full h-[1px] my-4 bg-gray-300"></div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}
