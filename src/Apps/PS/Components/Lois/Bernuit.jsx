import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function Bernuit() {
    const [p, setP] = useState(0.5); // Default probability
    const [result, setResult] = useState(null);

    // Function to calculate probability
    const calculateProbability = () => {
        // Calculate probability here
        // For Bernoulli distribution, it's simply p^x * (1-p)^(1-x), where x is either 0 or 1
        const x = Number(document.getElementById("inputX").value);
        const probability = Math.pow(p, x) * Math.pow(1 - p, 1 - x);
        setResult(probability);
    };

    return (
        <div>
            <Loi_Header Name="Bernoulli Distribution" />
            <div>
                <label htmlFor="inputX">Enter x value (0 or 1): </label>
                <input
                    type="number"
                    id="inputX"
                    min="0"
                    max="1"
                    defaultValue="0"
                    className=" border"
                />
                <button onClick={calculateProbability}>Calculate</button>
            </div>
            {result !== null && (
                <div>
                    <p>Probability: {result}</p>
                </div>
            )}
        </div>
    );
}

export default Bernuit;
