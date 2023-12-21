import React, { useState } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Containts() {
    const { Contraints, SetConstraints } = usePLContext();

    const [constraints, setConstraints] = useState([]);

    const handleAddConstraint = () => {
        const newConstraint = {
            X: "",
            PlusMinus: "+",
            Y: "",
            Operatore: ">=",
            Value: "",
        };
        if (constraints.length < 3) {
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

        // Toggle between options
        updatedConstraints[index][field] =
            updatedConstraints[index][field] === "+"
                ? "-"
                : updatedConstraints[index][field] === "-"
                ? "+"
                : updatedConstraints[index][field] === ">="
                ? "<="
                : ">=";

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
            <div className="text-xl font-semibold mb-3">
                Constraints : 
            </div>

            {/* Add Containt btn */}
            <div className="m-auto w-fit">
                <button
                    className=" bg-green-500 p-2 rounded-3xl mb-5"
                    onClick={handleAddConstraint}
                >
                    Add Constraint
                </button>
            </div>
            <div className=" flex flex-col justify-center">
                {constraints.map((constraint, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 mb-4 m-auto"
                    >
                        {/* a x */}
                        <div className="flex gap-1">
                            <input
                                className="border border-gray-400 w-[50px] text-center"
                                type="text"
                                id={`X-${index}`}
                                name={`X-${index}`}
                                value={constraint.X}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "X",
                                        e.target.value
                                    )
                                }
                                placeholder="0"
                            />
                            <div>X</div>
                        </div>
                        {/* Operatore + - */}
                        <div className="flex gap-1">
                            <div
                                onClick={() => toggleSelect("PlusMinus", index)}
                                className="border border-gray-400 text-center w-[20px]  cursor-pointer relative"
                            >
                                {constraint.PlusMinus}
                            </div>
                        </div>
                        {/* a y */}
                        <div className="flex gap-1">
                            <input
                                className="border border-gray-400  w-[50px] text-center"
                                type="text"
                                id={`Y-${index}`}
                                name={`Y-${index}`}
                                value={constraint.Y}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "Y",
                                        e.target.value
                                    )
                                }
                                placeholder="0"
                            />
                            <div>Y</div>
                        </div>

                        {/* Operatore >= <= */}
                        <div className="flex gap-1">
                            <div
                                onClick={() => toggleSelect("Operatore", index)}
                                className="border border-gray-400 px-1 cursor-pointer relative "
                            >
                                {constraint.Operatore}
                            </div>
                        </div>
                        {/* input value */}
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
                        <button
                            className="w-[20px] h-[20px] bg-red-500 flex justify-center
                        items-center text-white font-bold rounded-full"
                            onClick={() => handleRemoveConstraint(index)}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
