import React, { useState } from "react";
import { usePLContext } from "../Apps/PLcontext";

export default function Containts() {
    const { ContraintsNbr, SetConstraints } = usePLContext();
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

    const toggleSelect = (selectName) => {
        setSelectOpen((prev) => ({
            ...prev,
            [selectName]: !prev[selectName],
        }));
    };

    const handleOptionClick = (value, selectName, index) => {
        setSelectOpen((prev) => ({
            ...prev,
            [selectName]: false,
        }));

        // Add logic to update the specific constraint property based on user selection
        const updatedConstraints = [...constraints];
        updatedConstraints[index] = {
            ...updatedConstraints[index],
            [selectName]: value,
        };

        setConstraints(updatedConstraints);
        // Update the constraints array in the context
        SetConstraints(updatedConstraints);
    };

    const handleInputChange = (index, field, value) => {
        // Update the specific field for the given constraint
        const updatedConstraints = [...constraints];
        updatedConstraints[index] = {
            ...updatedConstraints[index],
            [field]: value,
        };

        setConstraints(updatedConstraints);
        // Update the constraints array in the context
        SetConstraints(updatedConstraints);
    };

    return (
        <div>
            <div>Constraints</div>
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
                            onClick={() => toggleSelect("PlusMinus")}
                            className="border border-gray-400 px-1 cursor-pointer relative"
                        >
                            {constraint.PlusMinus}
                            {selectOpen.PlusMinus && (
                                <div className="absolute bg-white border border-gray-400 mt-1 p-1 left-0">
                                    <div
                                        onClick={() =>
                                            handleOptionClick(
                                                "+",
                                                "PlusMinus",
                                                index
                                            )
                                        }
                                    >
                                        +
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleOptionClick(
                                                "-",
                                                "PlusMinus",
                                                index
                                            )
                                        }
                                    >
                                        -
                                    </div>
                                </div>
                            )}
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
                            onClick={() => toggleSelect("Operatore")}
                            className="border border-gray-400 px-1 cursor-pointer relative "
                        >
                            {constraint.Operatore}
                            {selectOpen.Operatore && (
                                <div className="absolute bg-white border border-gray-400 mt-1 px-1 left-0 ">
                                    <div
                                        onClick={() =>
                                            handleOptionClick(
                                                ">=",
                                                "Operatore",
                                                index
                                            )
                                        }
                                    >
                                        {">="}
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleOptionClick(
                                                "<=",
                                                "Operatore",
                                                index
                                            )
                                        }
                                    >
                                        {"<="}
                                    </div>
                                </div>
                            )}
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
