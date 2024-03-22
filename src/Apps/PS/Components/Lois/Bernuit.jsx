import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function Bernuit() {
    const [p, setP] = useState(0.5); // Default probability
    const [result, setResult] = useState(null);
    const [expectedValue, setExpectedValue] = useState(null);
    const [variance, setVariance] = useState(null);

    // Function to calculate probability, expected value, and variance
    const calculate = () => {
        const x = Number(document.getElementById("inputX").value);
        const probability = Math.pow(p, x) * Math.pow(1 - p, 1 - x);
        setResult(probability);

        // Calculate expected value
        const E = p;
        setExpectedValue(E);

        // Calculate variance
        const V = p * (1 - p);
        setVariance(V);
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <Loi_Header Name="Bernoulli Distribution" />
            <div className="  p-2 border border-gray-300 rounded-lg mb-6 md:w-[50%] m-auto">
                <div className="italic text-gray-600">
                    <p>P(X = x) = p^x * (1 - p)^(1 - x)</p>
                </div>
                <div className="italic text-gray-600">
                    <p>E(X) = p</p>
                </div>
                <div className="italic text-gray-600">
                    <p>V(X) = p * (1 - p)</p>
                </div>
            </div>
            <div className="flex items-center w-[95%] md:w-[50%] m-auto">
                <label htmlFor="inputX" className="mr-2">
                    Enter x value (0 or 1):
                </label>
                <input
                    type="number"
                    id="inputX"
                    min="0"
                    max="1"
                    defaultValue="0"
                    className="border p-2 rounded"
                />
                <button
                    onClick={calculate}
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Calculate
                </button>
            </div>
            {result !== null && (
                <div className="mt-4">
                    <p>Probability: {result}</p>
                    <p>Expected Value (E): {expectedValue}</p>
                    <p>Variance (V): {variance}</p>
                </div>
            )}
        </div>
    );
}

export default Bernuit;
