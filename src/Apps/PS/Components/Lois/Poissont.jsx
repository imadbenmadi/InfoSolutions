import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function Poisson() {
    const [lambda, setLambda] = useState(1); // Default lambda parameter
    const [k, setK] = useState(0); // Default k value
    const [result, setResult] = useState(null);
    const [expectedValue, setExpectedValue] = useState(null);
    const [variance, setVariance] = useState(null);

    // Function to calculate probability, expected value, and variance
    const calculateProbability = () => {
        // Calculate probability
        const probability =
            (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
        setResult(probability.toFixed(5)); // Round to 5 decimal places

        // Calculate expected value (E)
        setExpectedValue(lambda);

        // Calculate variance (V)
        setVariance(lambda);
    };

    // Function to calculate factorial
    const factorial = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <Loi_Header Name="Poisson Distribution" />
            <div className="p-2 border border-gray-300 rounded-lg mb-6 md:w-[50%] m-auto">
                <div className="italic text-gray-600">
                    <p>P(X = k) = (λ^k * e^(-λ)) / k!</p>
                </div>
                <div className="italic text-gray-600">
                    <p>E(X) = λ</p>
                </div>
                <div className="italic text-gray-600">
                    <p>V(X) = λ</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-[95%] md:w-[50%] m-auto">
                <label
                    htmlFor="inputLambda"
                    className="font-semibold md:text-lg"
                >
                    Enter λ (lambda) value:
                </label>
                <input
                    type="number"
                    id="inputLambda"
                    min="0"
                    step="0.01"
                    value={lambda}
                    onChange={(e) => setLambda(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputK" className="font-semibold md:text-lg">
                    Enter k value:
                </label>
                <input
                    type="number"
                    id="inputK"
                    min="0"
                    value={k}
                    onChange={(e) => setK(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={calculateProbability}
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

export default Poisson;
