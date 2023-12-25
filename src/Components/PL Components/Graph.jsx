import React, { useState, useEffect } from "react";
import Graph_Methodes from "./Graph_Methodes";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import { usePLContext } from "../Apps/PLcontext";

const Plot = createPlotlyComponent(Plotly);

export default function Graph() {
    const { Constraints } = usePLContext();

    useEffect(() => {
        // Generate Plotly data and layout based on Constraints
        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2 } = constraint;
            const operator = constraint.Operatore === ">=" ? "≥" : "";

            return {
                type: "scatter",
                mode: "lines",
                name: `Constraint ${
                    index + 1
                }: ${X1}x₁ ${PlusMinus1} ${X2}x₂ ${PlusMinus2} ${operator} ${Value}`,
                x: [0, 5], // Adjust range as needed
                y: [(Value - X1 * 0) / X2, (Value - X1 * 5) / X2], // Adjust range as needed
            };
        });

        const layout = {
            xaxis: { title: "X1" },
            yaxis: { title: "X2" },
        };

        // Check if the element with id 'constraint-plot' exists before attempting to plot
        const constraintPlotElement =
            document.getElementById("constraint-plot");
        if (constraintPlotElement) {
            Plotly.newPlot("constraint-plot", plotData, layout);
        }
    }, [Constraints]);

    const [method, setMethod] = useState("sommets");

    return (
        <div className="flex flex-col items-center justify-center h-fit">
            <Graph_Methodes method={method} setMethod={setMethod} />
            <div className="w-full md:w-3/4 bg-gray-100 rounded-lg shadow-md mt-4 p-4">
                <Plot
                    data={Constraints.map((constraint, index) => {
                        const { PlusMinus1, PlusMinus2, Value, X1, X2 } =
                            constraint;
                        const operator =
                            constraint.Operatore === ">=" ? "≥" : "";

                        return {
                            type: "scatter",
                            mode: "lines",
                            name: `Constraint ${
                                index + 1
                            }: ${X1}x₁ ${PlusMinus1} ${X2}x₂ ${PlusMinus2} ${operator} ${Value}`,
                            x: [0, 5], // Adjust range as needed
                            y: [(Value - X1 * 0) / X2, (Value - X1 * 5) / X2], // Adjust range as needed
                        };
                    })}
                    layout={{
                        xaxis: { title: "X1" },
                        yaxis: { title: "X2" },
                    }}
                    config={{ displayModeBar: false }}
                    className="w-full h-full"
                />
            </div>
            <div className="equation-labels-column mt-4">
                {Constraints.map((constraint, index) => (
                    <div key={index} className="equation-label mb-2">
                        <div>{`${constraint.X1}x₁ ${constraint.PlusMinus1}`}</div>
                        <div>{`${constraint.X2}x₂ ${constraint.PlusMinus2}`}</div>
                        <div>{`${constraint.Operatore} ${constraint.Value}`}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
