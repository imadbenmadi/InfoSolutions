import React, { useEffect, useState } from "react";
import { usePLContext } from "../Apps/PLcontext";
import Graph_Methodes from "./Graph_Methodes";
import Plot from "react-plotly.js";

const Graph = () => {
    const { Constraints } = usePLContext();
    const [plotComponent, setPlotComponent] = useState(null);

    useEffect(() => {
        const plotData = Constraints.map((constraint, index) => {
            const { PlusMinus1, PlusMinus2, Value, X1, X2, Operatore } =
                constraint;
            const operator = Operatore === ">=" ? "≥" : "≤";

            return {
                type: "scatter",
                mode: "lines",
                name: `Constraint ${index + 1}`,
                x: [-1, 8],
                y:
                    PlusMinus2 === "+"
                        ? [
                              Value - (X1 * -1 + Number(X2) * -1),
                              Value - (X1 * 8 + Number(X2) * 8),
                          ]
                        : PlusMinus2 === "-"
                        ? [
                              Value - (X1 * -1 - Number(X2) * -1),
                              Value - (X1 * 8 - Number(X2) * 8),
                          ]
                        : null,
            };
        });

        const layout = {
            xaxis: { range: [-1, 10] },
            yaxis: { range: [-1, 10] },
            showlegend: true, 
            legend: {
                x: 0.1, 
                y: 1.1, 
                xanchor: "center", // Anchor point for x-coordinate ('left', 'center', 'right')
                yanchor: "top", // Anchor point for y-coordinate ('top', 'middle', 'bottom')
            },
            margin: { l: 0, r: 0, t: 50, b: 20 },
            dragmode: false,
        };
        const config = {
            displayModeBar: true, // Hide the interactive mode bar
            modeBarButtons: [
                ["pan2d"], // Enable 2D panning
                ["zoomIn2d"], // Zoom in and zoom out buttons
                ["zoomOut2d"], // Zoom in and zoom out buttons
                ["resetScale2d"], // Reset 2D zoom and pan
                ["toImage"], // Download plot as an image
            ],
            displaylogo: false, // Hide the Plotly logo
            responsive: true, // Enable responsiveness
            editable: false, // Disable chart editing
            scrollZoom: true, // Disable scroll zoom
            showTips: false, // Show tips on hover
            modeBarButtonsToRemove: ["select2d", "lasso2d"],
            toImageButtonOptions: {
                format: "png", // Image download format (can be 'png', 'jpeg', 'webp')
                filename: "PL", // Default filename for downloaded image
                height: 500, // Image height
                width: 700, // Image width
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
