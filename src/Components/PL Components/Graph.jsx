import React from "react";
import { useState } from "react";
import Graph_Methodes from "./Graph_Methodes";
export default function Graph() {
    const [method, setMethod] = useState("sommets");
    return (
        <div className=" flex flex-col items-center justify-center  h-fit">
            <Graph_Methodes method={method} setMethod={setMethod} />
            <div className="  top-0 w-[90vw] md:w-[70vw] h-[300px] bg-black m-auto"></div>
        </div>
    );
}
