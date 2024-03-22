import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import App from "./App";
import PL from "./Apps/PL/PL";
import PS from "./Apps/PS/PS";
import SM from "./Apps/SM/SM";
import Not_Finished from "./Components/Not_Finished";
import NotFound from "./Components/NotFound";
import Bernuit from "./Apps/PS/Components/Bernuit";
import Benomial from "./Apps/PS/Components/Benomial";
import Poissont from "./Apps/PS/Components/Poissont";
import Geomitrique from "./Apps/PS/Components/Geomitrique";
import HyperGeomitrique from "./Apps/PS/Components/HyperGeomitrique";
import Uniforme from "./Apps/PS/Components/Uniforme";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/PL", element: <PL /> },
            { path: "/PS", element: <PS /> },
            { path: "/SM", element: <SM /> },

            { path: "/PS/Bernuit", element: <Bernuit /> },
            { path: "/PS/Benomial", element: <Benomial /> },
            { path: "/PS/Uniforme", element: <Uniforme /> },
            { path: "/PS/Hyper-Geomitrique", element: <HyperGeomitrique /> },
            { path: "/PS/Geomitrique", element: <Geomitrique /> },
            { path: "/PS/Poissont", element: <Poissont /> },

            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
