import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function Geometric() {
    const [p, setP] = useState(0.5); // Default probability of success
    const [k, setK] = useState(1); // Default number of trials
    const [result, setResult] = useState(null);
    const [expectedValue, setExpectedValue] = useState(null);
    const [variance, setVariance] = useState(null);

    // Function to calculate probability, expected value, and variance
    const calculate = () => {
        // Calculate probability
        const probability = p * Math.pow(1 - p, k - 1);
        setResult(probability.toFixed(5)); // Round to 5 decimal places

        // Calculate expected value (E)
        const E = 1 / p;
        setExpectedValue(E.toFixed(5)); // Round to 5 decimal places

        // Calculate variance (V)
        const V = (1 - p) / Math.pow(p, 2);
        setVariance(V.toFixed(5)); // Round to 5 decimal places
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <Loi_Header Name="Geometric Distribution" />
            <div className="p-2 border border-gray-300 rounded-lg mb-6 md:w-[50%] m-auto">
                <div className="italic text-gray-600">
                    <p>P(X = k) = p * (1 - p)^(k - 1)</p>
                </div>
                <div className="italic text-gray-600">
                    <p>Expected Value (E): E(X) = 1 / p</p>
                </div>
                <div className="italic text-gray-600">
                    <p>Variance (V): V(X) = (1 - p) / p^2</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-[95%] md:w-[50%] m-auto">
                <label htmlFor="inputP" className="font-semibold md:text-lg">
                    Enter p (probability of success):
                </label>
                <input
                    type="number"
                    id="inputP"
                    min="0"
                    max="1"
                    step="0.01"
                    value={p}
                    onChange={(e) => setP(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputK" className="font-semibold md:text-lg">
                    Enter k (number of trials):
                </label>
                <input
                    type="number"
                    id="inputK"
                    min="1"
                    value={k}
                    onChange={(e) => setK(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={calculate}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Calculate
                </button>
            </div>
            {result !== null && (
                <div className="w-[90%] md:w-[30%] m-auto mt-4 md:mt-12 text-lg md:text-xl font-semibold">
                    <p>Probability: {result}</p>
                    <p>Expected Value (E): {expectedValue}</p>
                    <p>Variance (V): {variance}</p>
                </div>
            )}
        </div>
    );
}

export default Geometric;
