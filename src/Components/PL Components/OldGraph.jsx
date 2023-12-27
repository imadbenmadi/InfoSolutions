import React, { useEffect, useState } from "react";
import { usePLContext } from "../Apps/PLcontext";
import Graph_Methodes from "./Graph_Methodes";
import Plot from "react-plotly.js";

const Graph = () => {
    const { Constraints } = usePLContext();
    const [plotComponent, setPlotComponent] = useState(null);

    useEffect(() => {
        const generateFeasibleRegionVertices = () => {
            // Placeholder logic for dynamic generation (replace with actual logic)
            // This could involve solving a system of inequalities to determine vertices
            return [
                { x: 0, y: 0 },
                { x: 5, y: 0 },
                { x: 0, y: 5 },
            ];
        };

        const generateFeasibleRegionTrace = () => {
            const vertices = generateFeasibleRegionVertices();

            return {
                type: "scatter",
                mode: "lines",
                name: "Feasible Region",
                x: vertices.map((vertex) => vertex.x),
                y: vertices.map((vertex) => vertex.y),
                fill: "toself",
                fillcolor: "rgba(0,100,80,0.2)",
                line: {
                    color: "rgba(255,255,255,0)",
                },
            };
        };

        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2, Operatore } =
                constraint;
            const operator = Operatore === ">=" ? "≥" : "≤";

            return {
                type: "scatter",
                mode: "lines",
                name: `Constraint ${index + 1}`,
                x: [-1, 10],
                y:
                    PlusMinus2 === "+"
                        ? [
                              Value - (X1 * -1 + Number(X2) * -1),
                              Value - (X1 * 8 + Number(X2) * 10),
                          ]
                        : PlusMinus2 === "-"
                        ? [
                              Value - (X1 * -1 - Number(X2) * -1),
                              Value - (X1 * 10 - Number(X2) * 10),
                          ]
                        : null,
            };
        });

        plotData.push(generateFeasibleRegionTrace());

        const layout = {
            xaxis: { range: [-1, 10] },
            yaxis: { range: [-1, 10] },
            showlegend: true,
            legend: {
                x: 0.1,
                y: 1.1,
                xanchor: "center",
                yanchor: "top",
            },
            margin: { l: 0, r: 0, t: 50, b: 20 },
            dragmode: false,
        };

        const config = {
            displayModeBar: true,
            modeBarButtons: [
                ["pan2d"],
                ["zoomIn2d"],
                ["zoomOut2d"],
                ["resetScale2d"],
                ["toImage"],
            ],
            displaylogo: false,
            responsive: true,
            editable: false,
            scrollZoom: true,
            showTips: false,
            modeBarButtonsToRemove: ["select2d", "lasso2d"],
            toImageButtonOptions: {
                format: "png",
                filename: "PL",
                height: 500,
                width: 700,
            },
        };

        const plot = (
            <Plot
                data={plotData}
                layout={layout}
                config={config}
                style={{ width: "90%", margin: "auto", height: "100%" }}
                useResizeHandler={true}
                autosize={true}
            />
        );
        setPlotComponent(plot);
    }, [Constraints]);

    const handleMethodChange = (newMethod) => {
        // Add any specific logic when the method changes
    };

    return (
        <div className="mt-4 pb-20">
            <Graph_Methodes onMethodChange={handleMethodChange} />
            <div className="card mt-4">
                <div id="constraint-plot" className="card-body">
                    {plotComponent}
                </div>
            </div>
        </div>
    );
};

export default Graph;
