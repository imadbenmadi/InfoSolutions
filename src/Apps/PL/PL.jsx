import React from "react";
import Page_Title from "../../Components/Page_Title";
import { PLProvider } from "./PLcontext";
import Function_Objectif from "./Components/Function_Objectif";
function PL() {
    return (
        <div>
        <Page_Title title={"Programation Lineer"} />
        <PLProvider>
            <Function_Objectif />
        </PLProvider>
        </div>
    );
}

export default PL;
