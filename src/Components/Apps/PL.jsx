import React, { useState } from "react";

const PL = () => {
    const [MinMax, SetMinMax] = useState("Min");
    const [Operatore, SetOperatore] = useState("<=");
    const [PlusMinus, SetPlusMinus] = useState("+");
    const [X, SetX] = useState("");
    const [Y, SetY] = useState("");
    const [Value, SetValue] = useState("");

    const [selectOpen, setSelectOpen] = useState({
        MinMax: false,
        PlusMinus: false,
        Operatore: false,
    });

    const MinMaxChanged = (value) => {
        SetMinMax(value);
        toggleSelect("MinMax");
    };

    const handleOperatoreChange = (value) => {
        SetOperatore(value);
        toggleSelect("Operatore");
    };

    const handlePlusMinusChange = (value) => {
        SetPlusMinus(value);
        toggleSelect("PlusMinus");
    };

    const handleXChange = (e) => {
        const inputValue = e.target.value;
        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
            SetX(inputValue);
        }
    };

    const handleYChange = (e) => {
        const inputValue = e.target.value;
        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
            SetY(inputValue);
        }
    };
    const handleValueChange = (e) => {
        const inputValue = e.target.value;
        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
            SetValue(inputValue);
        }
    };
    const toggleSelect = (selectName) => {
        setSelectOpen((prev) => ({
            ...prev,
            [selectName]: !prev[selectName],
        }));
    };

    const handleOptionClick = (value, selectName) => {
        if (selectOpen[selectName]) {
            setSelectOpen((prev) => ({
                ...prev,
                [selectName]: false,
            }));
        }

        switch (selectName) {
            case "MinMax":
                MinMaxChanged(value);
                break;
            case "Operatore":
                handleOperatoreChange(value);
                break;
            case "PlusMinus":
                handlePlusMinusChange(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className=" text-Black">
            <div className="text-Blue font-bold text-2xl underline mb-4">
                Programation Lineer
            </div>

            <div
                className="text-xl font-semibold
                  mb-3"
            >
                Function Objectif :
            </div>
            <div className="flex items-center gap-3 text">
                <div className="flex items-center gap-1">
                    <div
                        onClick={() => toggleSelect("MinMax")}
                        className="border border-gray-400 px-1 cursor-pointer relative"
                    >
                        {MinMax}
                        {selectOpen.MinMax && (
                            <div className="absolute bg-white border border-gray-400 mt-1 left-0 p-1">
                                <div
                                    onClick={() =>
                                        handleOptionClick("min", "MinMax")
                                    }
                                >
                                    Min
                                </div>
                                <div
                                    onClick={() =>
                                        handleOptionClick("max", "MinMax")
                                    }
                                >
                                    Max
                                </div>
                            </div>
                        )}
                    </div>
                    <div>Z= </div>
                </div>

                <div className="flex gap-1">
                    <input
                        className="border border-gray-400 w-[30px]"
                        type="text"
                        id="numberInput"
                        name="numberInput"
                        value={X}
                        onChange={handleXChange}
                        placeholder="10"
                    />
                    <div>X</div>
                </div>
                <div className="flex gap-1">
                    <div
                        onClick={() => toggleSelect("PlusMinus")}
                        className="border border-gray-400 px-1 cursor-pointer relative"
                    >
                        {PlusMinus}
                        {selectOpen.PlusMinus && (
                            <div className="absolute bg-white border border-gray-400 mt-1 p-1 left-0">
                                <div
                                    onClick={() =>
                                        handleOptionClick("+", "PlusMinus")
                                    }
                                >
                                    +
                                </div>
                                <div
                                    onClick={() =>
                                        handleOptionClick("-", "PlusMinus")
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
                        id="numberInput"
                        name="numberInput"
                        value={Y}
                        onChange={handleYChange}
                        placeholder="1"
                    />
                    <div>Y</div>
                </div>
                <div className="flex gap-1">
                    <div
                        onClick={() => toggleSelect("Operatore")}
                        className="border border-gray-400 px-1 cursor-pointer relative "
                    >
                        {Operatore}
                        {selectOpen.Operatore && (
                            <div className="absolute bg-white border border-gray-400 mt-1 px-1 left-0 ">
                                <div
                                    onClick={() =>
                                        handleOptionClick(">=", "Operatore")
                                    }
                                >
                                    {">="}
                                </div>
                                <div
                                    onClick={() =>
                                        handleOptionClick("<=", "Operatore")
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
                        id="numberInput"
                        name="numberInput"
                        value={Value}
                        onChange={handleValueChange}
                        placeholder="3"
                    />
                </div>
            </div>
        </div>
    );
};

export default PL;
