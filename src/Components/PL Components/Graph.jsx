import React, { useEffect, useState } from "react";
import { usePLContext } from "../Apps/PLcontext";
import Graph_Methodes from "./Graph_Methodes";
import Plot from "react-plotly.js";

const Graph = () => {
    const { Constraints } = usePLContext();
    const [plotComponent, setPlotComponent] = useState(null);
    const [layout, setLayout] = useState({
        xaxis: {
            // Set the step for the x-axis
        },
        yaxis: {
            range: [0, 50],
        },
        showlegend: true,
        legend: {
            x: 0.1,
            y: 1.1,
            xanchor: "center",
            yanchor: "top",
        },
        margin: { l: 50, r: 0, t: 50, b: 20 },
        dragmode: "pan",
        mode: "pan2d",
        autosize: true,
        responsive: true,
    });
    useEffect(() => {
        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2, Operatore } =
                constraint;
            // const operator = Operatore === ">=" ? ">=" : "<=";

            const yValues =
                PlusMinus2 === "+"
                    ? [
                          Number(Value) - (X1 * 0 + X2 * 0),
                          Number(Value) - (X1 * 100 + X2 * 100),
                      ]
                    : PlusMinus2 === "-"
                    ? [
                          Number(Value) - (X1 * 0 - X2 * 0),
                          Number(Value) - (X1 * 100 - X2 * 100),
                      ]
                    : null;
            // Adjust Y-values to stop at Y=0
            const adjustedYValues = yValues.map((y) => (y < 0 ? 0 : y));
            console.log("index:" + index + "\nY-values:", yValues);
            console.log("Adjusted Y-values:", adjustedYValues);

            return {
                type: "scatter",
                mode: "lines",
                name: `Constraint ${index + 1}`,
                x: [0, 10],
                y: adjustedYValues,
            };
        });

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
            showTips: false,
            modeBarButtonsToRemove: ["select2d", "lasso2d"],
            toImageButtonOptions: {
                format: "png",
                filename: "PL",
                height: 500,
                width: 700,
            },
            modeBar: {
                // Adjust the size of the mode bar buttons
                size: 50,
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
        <div className="mt-4">
            <Graph_Methodes onMethodChange={handleMethodChange} />
            <div className="card mt-4">
                <div
                    id="constraint-plot"
                    className="card-body w-[90vw] md:w-full h-[400px] relative border-[1px] border-[#ccc]"
                >
                    {plotComponent}
                </div>
            </div>
        </div>
    );
};

export default Graph;
