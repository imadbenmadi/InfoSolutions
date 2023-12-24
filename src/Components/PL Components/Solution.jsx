import React from "react";
import { useState } from "react";
import Methodes from "./Methodes";
import Graph from "./Graph";
export default function Solution() {
    const [method, setMethod] = useState("Graphique");

    return (
        <div>
            <Methodes method={method} setMethod={setMethod} />
            <Graph />
        </div>
    );
}
