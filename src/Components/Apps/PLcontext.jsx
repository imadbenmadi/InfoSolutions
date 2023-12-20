import React, { createContext, useContext, useState } from "react";

const PLContext = createContext();

export const PLProvider = ({ children }) => {
    const [variables, setVariables] = useState([]);
    const [MinMax, SetMinMax] = useState("Min");
    const [Operatore, SetOperatore] = useState("<=");
    const [PlusMinus, SetPlusMinus] = useState("+");
    const [Value, SetValue] = useState("");
    const [Desision_var_Nbr, SetDesision_var_Nbr] = useState(2);
    const [Constraints, SetConstraints] = useState([]);

    const contextValues = {
        variables,
        setVariables,
        MinMax,
        SetMinMax,
        Operatore,
        SetOperatore,
        PlusMinus,
        SetPlusMinus,
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
