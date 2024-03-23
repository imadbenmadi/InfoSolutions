import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function UniformDiscrete() {
    const [a, setA] = useState(1); // Default minimum value
    const [b, setB] = useState(6); // Default maximum value
    const [x, setX] = useState(3); // Default value to find probability for
    const [result, setResult] = useState(null);
    const [expectedValue, setExpectedValue] = useState(null);
    const [variance, setVariance] = useState(null);

    // Function to calculate probability, expected value, and variance
    const calculate = () => {
        // Calculate probability
        const probability = 1 / (b - a + 1);
        setResult(probability.toFixed(5)); // Round to 5 decimal places

        // Calculate expected value (E)
        const E = (a + b) / 2;
        setExpectedValue(E);

        // Calculate variance (V)
        const V = ((b - a + 1) ** 2 - 1) / 12;
        setVariance(V.toFixed(5)); // Round to 5 decimal places
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <Loi_Header Name="Uniform Discrete Distribution" />
            <div className="p-2 border border-gray-300 rounded-lg mb-6 md:w-[50%] m-auto">
                <div className="italic text-gray-600">
                    <p>P(X = x) = 1 / (b - a + 1)</p>
                </div>
                <div className="italic text-gray-600">
                    <p>Expected Value (E): E(X) = (a + b) / 2</p>
                </div>
                <div className="italic text-gray-600">
                    <p>Variance (V): V(X) = ((b - a + 1)^2 - 1) / 12</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-[95%] md:w-[50%] m-auto">
                <label htmlFor="inputA" className="font-semibold md:text-lg">
                    Enter minimum value (a):
                </label>
                <input
                    type="number"
                    id="inputA"
                    min="1"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputB" className="font-semibold md:text-lg">
                    Enter maximum value (b):
                </label>
                <input
                    type="number"
                    id="inputB"
                    min="1"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputX" className="font-semibold md:text-lg">
                    Enter value to find probability for (x):
                </label>
                <input
                    type="number"
                    id="inputX"
                    min={a}
                    max={b}
                    value={x}
                    onChange={(e) => setX(e.target.value)}
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

export default UniformDiscrete;
