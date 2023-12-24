import React from "react";
import Methodes from "./Methodes";
import { useState } from "react";
export default function Solution() {
    const [method, setMethod] = useState("Graphique");

    return (
        <div>
        <Methodes method={method} setMethod={setMethod} />
        
        </div>
    );
}
