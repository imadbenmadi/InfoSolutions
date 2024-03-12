import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import App from "./App";
import PL from "./Apps/PL/PL";
import PS from "./Apps/PS/PS";
import SM from "./Apps/SM/SM";
import Not_Finished from "./Components/Not_Finished";
import NotFound from "./Components/NotFound";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/PL", element: <PL /> },
            { path: "/PS", element: <Not_Finished /> },
            { path: "/SM", element: <SM /> },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
