import React from "react";
import { useState } from "react";
import Methodes from "./Methodes";
import Graph from "./Graph";
export default function Solution() {
    const [method, setMethod] = useState("");

    return (
        <div>
            <div className=" my-10">
                <Methodes method={method} setMethod={setMethod} />
            </div>
            {method === "Graphique" ? (
                <Graph />
            ) : method === "Symplexe" ? (
                <div>Symplexe</div>
            ) : null}
        </div>
    );
}
