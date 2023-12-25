import React, { useEffect } from "react";
import Plot from "react-plotly.js/factory";
import { usePLContext } from "../Apps/PLcontext";
import Graph_Methodes from "./Graph_Methodes";
import Plot from "react-plotly.js";
const Graph = () => {
    const { Constraints } = usePLContext();

    useEffect(() => {
        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2, Operatore } =
                constraint;
            const operator = Operatore === ">=" ? "≥" : "≤";

            return {
                type: "scatter",
                mode: "lines",
                name: `Constraint ${
                    index + 1
                }: ${X1}x₁ ${PlusMinus1} ${X2}x₂ ${PlusMinus2} ${operator} ${Value}`,
                x: [-1, 8],
                y: [(Value - X1 * -1) / X2, (Value - X1 * 8) / X2],
            };
        });

        const layout = {
            xaxis: { title: "X" },
            yaxis: { title: "Y" },
        };

        return (
            <Plot
                data={plotData}
                layout={layout}
                config={{ displayModeBar: false }}
                style={{ width: "100%", height: "100%" }}
            />
        );
    }, [Constraints]);

    const handleMethodChange = (newMethod) => {
        // Add any specific logic when the method changes
    };

    return (
        <div className="mt-4">
            <Graph_Methodes onMethodChange={handleMethodChange} />
            <div className="card mt-4">
                <div id="constraint-plot" className="card-body">
                    {/* The Plotly chart will be rendered here */}
                </div>
            </div>
        </div>
    );
};

export default Graph;
