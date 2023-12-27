import React, { useEffect, useState } from "react";
import { usePLContext } from "../Apps/PLcontext";
import Graph_Methodes from "./Graph_Methodes";
import Plot from "react-plotly.js";

const Graph = () => {
    const { Constraints } = usePLContext();
    const [plotComponent, setPlotComponent] = useState(null);
    const [layout, setLayout] = useState({
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
        dragmode: "pan",
        mode: "pan2d",
    });
    useEffect(() => {
        const handleRelayout = (eventData) => {
            const xMin = eventData["xaxis.range[0]"];
            const yMin = eventData["yaxis.range[0]"];

            const newMinX = Math.max(-1, xMin);
            const newMinY = Math.max(-1, yMin);

            const newMaxX = Math.max(newMinX + 11, 10); // Adjust the calculation based on your needs
            const newMaxY = Math.max(newMinY + 11, 10); // Adjust the calculation based on your needs

            // Enforce positive ranges
            const newLayout = {
                ...layout,
                xaxis: { range: [newMinX, newMaxX] },
                yaxis: { range: [newMinY, newMaxY] },
            };

            setLayout(newLayout);
        };

        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2, Operatore } =
                constraint;
            const operator = Operatore === ">=" ? "≥" : "≤";

            const yValues =
                PlusMinus2 === "+"
                    ? [
                          Value - (X1 * 0 + Number(X2) * 0),
                          Value - (X1 * 8 + Number(X2) * 10),
                      ]
                    : PlusMinus2 === "-"
                    ? [
                          Value - (X1 * -1 - Number(X2) * -1),
                          Value - (X1 * 10 - Number(X2) * 10),
                      ]
                    : null;

            // Adjust Y-values to stop at Y=0
            const adjustedYValues = yValues.map((y) => Math.max(y, 0));

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
        };

        const plot = (
            <Plot
                data={plotData}
                layout={layout}
                config={config}
                style={{ width: "90%", margin: "auto", height: "100%" }}
                useResizeHandler={true}
                autosize={true}
                onRelayout={handleRelayout} // Attach the handleZoom function to capture zoom events
                
            />
        );
        setPlotComponent(plot);
    }, [Constraints, layout]);

    const handleMethodChange = (newMethod) => {
        // Add any specific logic when the method changes
    };

    return (
        <div className="mt-4">
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
