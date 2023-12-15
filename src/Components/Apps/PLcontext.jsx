import React, { createContext, useContext, useState } from "react";

const PLContext = createContext();

export const PLProvider = ({ children }) => {
    const [MinMax, SetMinMax] = useState("Min");
    const [Operatore, SetOperatore] = useState("<=");
    const [PlusMinus, SetPlusMinus] = useState("+");
    const [X, SetX] = useState("");
    const [Y, SetY] = useState("");
    const [Value, SetValue] = useState("");
    const [Desision_var_Nbr, SetDesision_var_Nbr] = useState(2);
    const [Constraints, SetConstraints] = useState([]);

    const contextValues = {
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
        Constraints,
        SetConstraints,
    };

    return (
        <PLContext.Provider value={contextValues}>
            {children}
        </PLContext.Provider>
    );
};

export const usePLContext = () => useContext(PLContext);
