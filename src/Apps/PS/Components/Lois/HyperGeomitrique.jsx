import React, { useState } from "react";
import Loi_Header from "../Loi_Header";

function Hypergeometric() {
    const [N, setN] = useState(10); // Total population size
    const [K, setK] = useState(4); // Number of success states in the population
    const [n, setn] = useState(5); // Sample size
    const [k, setk] = useState(2); // Number of observed successes
    const [result, setResult] = useState(null);
    const [expectedValue, setExpectedValue] = useState(null);
    const [variance, setVariance] = useState(null);

    // Function to calculate probability, expected value, and variance
    const calculate = () => {
        // Calculate probability
        const probability =
            (choose(K, k) * choose(N - K, n - k)) / choose(N, n);
        setResult(probability.toFixed(5)); // Round to 5 decimal places

        // Calculate expected value (E)
        const E = (n * K) / N;
        setExpectedValue(E.toFixed(5)); // Round to 5 decimal places

        // Calculate variance (V)
        const V = (n * K * (N - K) * (N - n)) / (N * N * (N - 1));
        setVariance(V.toFixed(5)); // Round to 5 decimal places
    };

    // Function to calculate binomial coefficient
    const choose = (n, k) => {
        if (k === 0) return 1;
        return (n * choose(n - 1, k - 1)) / k;
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <Loi_Header Name="Hypergeometric Distribution" />
            <div className="p-2 border border-gray-300 rounded-lg mb-6 md:w-[50%] m-auto">
                <div className="italic text-gray-600">
                    <p>
                        P(X = k) = (K choose k) * ((N - K) choose (n - k)) / (N
                        choose n)
                    </p>
                </div>
                <div className="italic text-gray-600">
                    <p>Expected Value (E): E(X) = (n * K) / N</p>
                </div>
                <div className="italic text-gray-600">
                    <p>
                        Variance (V): V(X) = (n * K * (N - K) * (N - n)) / (N *
                        N * (N - 1))
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center w-[95%] md:w-[50%] m-auto">
                <label htmlFor="inputN" className="font-semibold md:text-lg">
                    Enter N (total population size):
                </label>
                <input
                    type="number"
                    id="inputN"
                    min="1"
                    value={N}
                    onChange={(e) => setN(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputK" className="font-semibold md:text-lg">
                    Enter K (number of success states in the population):
                </label>
                <input
                    type="number"
                    id="inputK"
                    min="0"
                    value={K}
                    onChange={(e) => setK(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputn" className="font-semibold md:text-lg">
                    Enter n (sample size):
                </label>
                <input
                    type="number"
                    id="inputn"
                    min="1"
                    value={n}
                    onChange={(e) => setn(e.target.value)}
                    className="border p-2 rounded"
                />
                <label htmlFor="inputk" className="font-semibold md:text-lg">
                    Enter k (number of observed successes):
                </label>
                <input
                    type="number"
                    id="inputk"
                    min="0"
                    value={k}
                    onChange={(e) => setk(e.target.value)}
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

export default Hypergeometric;
