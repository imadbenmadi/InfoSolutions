import React from "react";
import { useState } from "react";
import Graph_Methodes from "./Graph_Methodes";
export default function Graph() {
    const [method, setMethod] = useState("sommets");
    return (
        <div className=" flex flex-col items-center justify-center">
            <Graph_Methodes method={method} setMethod={setMethod} />
            <div className=" w-[700px] h-[400px] bg-black m-auto"></div>
        </div>
    );
}
