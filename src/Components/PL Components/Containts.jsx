import React, { useState } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Constraints() {
    const { SetConstraints, Desision_var_Nbr } = usePLContext();
    const [constraints, setConstraints] = useState([]);

    const handleAddConstraint = () => {
        if (constraints.length < 3) {
            const newConstraint = {
                Operatore: ">=",
                Value: "",
            };

            // Dynamically add X, PlusMinus, and Y properties based on Desision_var_Nbr
            for (let i = 1; i <= Desision_var_Nbr; i++) {
                newConstraint[`X${i}`] = "";
                newConstraint[`PlusMinus${i}`] = "+";
            }

            SetConstraints((prevConstraints) => [
                ...prevConstraints,
                newConstraint,
            ]);
            setConstraints((prevConstraints) => [
                ...prevConstraints,
                newConstraint,
            ]);
        }
    };

    const handleRemoveConstraint = (index) => {
        SetConstraints((prevConstraints) => [
            ...prevConstraints.slice(0, index),
            ...prevConstraints.slice(index + 1),
        ]);
        setConstraints((prevConstraints) => [
            ...prevConstraints.slice(0, index),
            ...prevConstraints.slice(index + 1),
        ]);
    };

    const toggleSelect = (field, index) => {
        const updatedConstraints = [...constraints];

        if (field.startsWith("PlusMinus")) {
            // Toggle for PlusMinus fields
            updatedConstraints[index][field] =
                updatedConstraints[index][field] === "+" ? "-" : "+";
        } else if (field === "Operatore") {
            // Toggle for Operatore field
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
            <div className="text-xl font-semibold mb-3">Constraints :</div>

            {/* Add Constraint btn */}
            <div className="m-auto w-fit">
                <button
                    className="bg-green-500 p-2 rounded-3xl mb-5"
                    onClick={handleAddConstraint}
                >
                    Add Constraint
                </button>
            </div>

            {/* Contraints */}
            <div className="flex flex-col justify-center">
                {constraints.map((constraint, index) => (
                    <>
                        <div
                            key={index}
                            className="flex items-center flex-wrap gap-2  m-auto"
                        >
                            {Array.from(
                                { length: Desision_var_Nbr },
                                (_, i) => (
                                    <React.Fragment key={i}>
                                        {/* PlusMinus */}
                                        <div className="flex gap-1 cursor-pointer border border-gray-400 w-[30px] text-center">
                                            <div
                                                onClick={() =>
                                                    toggleSelect(
                                                        `PlusMinus${i + 1}`,
                                                        index
                                                    )
                                                }
                                                className="border border-gray-400 text-center w-[20px] cursor-pointer relative"
                                            >
                                                {
                                                    constraint[
                                                        `PlusMinus${i + 1}`
                                                    ]
                                                }
                                            </div>
                                        </div>
                                        {/* X */}
                                        <div className="flex gap-1">
                                            <input
                                                className="border border-gray-400 w-[50px] text-center"
                                                type="text"
                                                id={`X${i + 1}-${index}`}
                                                name={`X${i + 1}-${index}`}
                                                value={constraint[`X${i + 1}`]}
                                                onChange={function(e) {
                                                    handleInputChange(
                                                        index,
                                                        `X${i + 1}`,
                                                        e.target.value
                                                    )
                                                    console.log(constraint[`X${i + 1}`])
                                                    }
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
                            {/* Remove Constraint */}
                            <button
                                className="w-[20px] h-[20px] bg-red-500 flex justify-center
                            items-center text-white font-bold rounded-full"
                                onClick={() => handleRemoveConstraint(index)}
                            >
                                x
                            </button>
                        </div>
                        <div className="w-full h-[1px] my-4 bg-gray-300"></div>
                    </>
                ))}
            </div>
        </>
    );
}
