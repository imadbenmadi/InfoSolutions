import React, { useState } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Containts() {
    const { Contraints, SetConstraints } = usePLContext();

    const [constraints, setConstraints] = useState([]);
    const [selectOpen, setSelectOpen] = useState({
        PlusMinus: false,
        Operatore: false,
    });

    const handleAddConstraint = () => {
        const newConstraint = {
            X: "",
            PlusMinus: "+",
            Y: "",
            Operatore: ">=",
            Value: "",
        };

        SetConstraints((prevConstraints) => [
            ...prevConstraints,
            newConstraint,
        ]);
        setConstraints((prevConstraints) => [
            ...prevConstraints,
            newConstraint,
        ]);
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

    const toggleSelect = (selectName, index) => {
        setSelectOpen((prev) => ({
            ...prev,
            [selectName]: !prev[selectName],
        }));

        // Add logic to toggle between options without showing a dropdown menu
        const updatedConstraints = [...constraints];
        const currentValue = updatedConstraints[index][selectName];
        const newValue =
            currentValue === "+" || currentValue === "-"
                ? currentValue === "+"
                    ? "-"
                    : "+"
                : currentValue === ">="
                ? "<="
                : ">=";

        updatedConstraints[index] = {
            ...updatedConstraints[index],
            [selectName]: newValue,
        };

        setConstraints(updatedConstraints);
        // Update the constraints array in the context
        SetConstraints(updatedConstraints);
    };

    const handleInputChange = (index, field, value) => {
    // Input validation condition
    if (/^-?\d*\.?\d*$/.test(value) || value === "") {
        // Update the specific field for the given constraint
        const updatedConstraints = [...constraints];
        updatedConstraints[index] = {
            ...updatedConstraints[index],
            [field]: value,
        };

        // Update the local state with the modified constraints
        setConstraints(updatedConstraints);

        // Update the constraints array in the context (global state)
        SetConstraints(updatedConstraints);
    } else {
        // Handle invalid input, perhaps show an error message or take appropriate action
        console.error("Invalid input. Please enter a valid numeric value.");
    }
};


    return (
        <div>
            <div className="text-xl font-semibold mb-3">Constraints :</div>
            {constraints.map((constraint, index) => (
                <div key={index} className="flex gap-1">
                    <div className="flex gap-1">
                        <input
                            className="border border-gray-400 w-[30px]"
                            type="text"
                            id={`X-${index}`}
                            name={`X-${index}`}
                            value={constraint.X}
                            onChange={(e) =>
                                handleInputChange(index, "X", e.target.value)
                            }
                            placeholder="10"
                        />
                        <div>X</div>
                    </div>
                    <div className="flex gap-1">
                        <div
                            onClick={() => toggleSelect("PlusMinus", index)}
                            className="border border-gray-400 px-1 cursor-pointer relative"
                        >
                            {constraint.PlusMinus}
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <input
                            className="border border-gray-400 w-[30px]"
                            type="text"
                            id={`Y-${index}`}
                            name={`Y-${index}`}
                            value={constraint.Y}
                            onChange={(e) =>
                                handleInputChange(index, "Y", e.target.value)
                            }
                            placeholder="1"
                        />
                        <div>Y</div>
                    </div>
                    <div className="flex gap-1">
                        <div
                            onClick={() => toggleSelect("Operatore", index)}
                            className="border border-gray-400 px-1 cursor-pointer relative "
                        >
                            {constraint.Operatore}
                        </div>
                    </div>
                    <div>
                        <input
                            className="border border-gray-400 w-[40px]"
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
                    <button onClick={() => handleRemoveConstraint(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button onClick={handleAddConstraint}>Add Constraint</button>
        </div>
    );
}
