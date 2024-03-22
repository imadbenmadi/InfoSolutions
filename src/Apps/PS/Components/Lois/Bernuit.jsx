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
        <div className="container mx-auto mt-8 px-4">
            <Loi_Header Name="Bernoulli Distribution" />
            <div className="flex flex-col gap-5 justify-center items-center">
                <label htmlFor="inputX" className="mr-2">
                    Enter x value (0 or 1):
                </label>

                <div>
                    <input
                        type="number"
                        id="inputX"
                        min="0"
                        max="1"
                        defaultValue="0"
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={calculateProbability}
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Calculate
                    </button>
                    {result !== null && (
                        <div className="mt-4">
                            <p>Probability: {result}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bernuit;
