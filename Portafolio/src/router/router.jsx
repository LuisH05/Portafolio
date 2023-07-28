import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Main.jsx'
import About from "../Pages/About.jsx";
import Home from "../App.jsx";
import Project from "../Pages/Project.jsx";


const routers = createBrowserRouter([
    {
        path:'/', element: <Layout />,
        children:[
            {path: '/', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/project', element: <Project />},
        ]
    }
])

export default routers