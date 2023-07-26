import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Main.jsx'
import About from "../Pages/About.jsx";
import Home from "../App.jsx";


const routers = createBrowserRouter([
    {
        path:'/', element: <Layout />,
        children:[
            {path: '/', element: <Home />},
            {path: '/about', element: <About />},
        ]
    }
])

export default routers