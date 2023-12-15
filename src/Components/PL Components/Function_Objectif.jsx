import React from "react";
import { useState } from "react";
import { usePLContext } from "../Apps/PLcontext";
export default function Function_Objectif() {
    const {
        MinMax,
        SetMinMax,
        Operatore,
        SetOperatore,
        PlusMinus,
        SetPlusMinus,
        X,
        SetX,
        Y,
        SetY,
        Value,
        SetValue,
        Desision_var_Nbr,
        SetDesision_var_Nbr,
    } = usePLContext();
    const [selectOpen, setSelectOpen] = useState({
        MinMax: false,
        PlusMinus: false,
        Operatore: false,
    });
    const handleDesision_var_NbrChange = (value) => {
        SetDesision_var_Nbr(value);
    };
    const decreese = () => {
        if (Desision_var_Nbr > 2) SetDesision_var_Nbr(Desision_var_Nbr - 1);
    };
    const increes = () => {
        SetDesision_var_Nbr(Desision_var_Nbr + 1);
    };
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
        <div className=" md:flex">
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
            {/* Nombre Des variables du décision */}
            <div className=" flex mt-5 ">
                <div>Varibales Des Déecision  :</div>
                <div className="flex items-center border w-fit  ">
                    <button className=" bg-gray-300 px-3" onClick={decreese}>
                        -
                    </button>
                    <div className=" px-3" onChange={handleDesision_var_NbrChange}>
                        {Desision_var_Nbr}
                    </div>
                    <button className=" bg-gray-300 px-3" onClick={increes}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
