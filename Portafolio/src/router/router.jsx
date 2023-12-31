import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Main.jsx'
import About from "../Pages/About.jsx";
import Home from "../App.jsx";
import Project from "../Pages/Project.jsx";
import Tecnologias from "../Pages/Tecnologias.jsx";

const routers = createBrowserRouter([
    {
        path:'/', element: <Layout />,
        children:[
            {path: '/', element: <Home />},
            {path: '/sobre-mi', element: <About />},
            {path: '/proyectos', element: <Project />},
            {path: '/tecnologias', element: <Tecnologias />},
        ]
    }
])

export default routers