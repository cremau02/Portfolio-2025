import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Starter from './starter/Starter.jsx'
import Projects from './projects/projects.jsx'
import Me from './me/me.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Starter />,
    },
    {
        path: "/me/",
        element: <Me/>,
    },
    {
        path: "/projects/",
        element: <Projects />,
    },
]);

createRoot(document.getElementById('home')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
