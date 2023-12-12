import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";
import PL from "./Components/Apps/PL";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/PL", element: <PL /> },
        ],
    },
]);

export default routes;
