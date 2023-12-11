import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    
]);

export default routes;
